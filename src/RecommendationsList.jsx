import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import styled from '@emotion/styled';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from './MenuItem';
import FirstItemLabel from './assets/1.svg?react';
import SecondItemLabel from './assets/2.svg?react';
import ThirdItemLabel from './assets/3.svg?react';

const outerColor = {
  value: "#32936f",
  exotic: "#2274a5",
  similar: "#e4002b",
  best: "#ffbf00"
}

const headerTooltip = (type) => {
  if (type === "similar") return "Curated recommendations inspired by your recent purchases. More of what you're likely to love";
  return "Terpenes give Cannabis its aroma, flavor & quality";
}

const OuterContainer = styled.div`
  padding: 6px;
  border-radius: 30px;
  max-width: 1410px;
  margin-inline: auto;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const InnerContainer = styled.div`
  background: white;
  border-radius: 30px;
  margin-inline: auto;
`;

const MessageContainer = styled.div`
  padding: 3rem;
  text-align: center;
`;

const Message = styled.p`
  margin-top: 1rem;
  color: rgb(75, 85, 99);
`;

const Header = styled.h2`
  color: white;
  font-size: 150%;
  margin: 20px;
  padding: 0;
  line-height: 1;
  font-weight: 800;
  text-transform: uppercase;
`;

const ItemsContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 768px) {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  @media (max-width: 768px) {
    scroll-snap-align: center;
    flex-shrink: 0;
    width: calc(100vw - 6rem);
    justify-content: center;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
`;

const carouselButtonBase = `
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: white;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    cursor: pointer;
    font-size: 1.4rem;
    line-height: 1;
  }
`;

const CarouselButtonLeft = styled.button`
  ${carouselButtonBase}
  @media (max-width: 768px) {
    left: 4px;
  }
`;

const CarouselButtonRight = styled.button`
  ${carouselButtonBase}
  @media (max-width: 768px) {
    right: 4px;
  }
`;

export default function RecommendationsList({
    storeSlug, 
    productType,
    type = 'value',
    minimumPrice = null,
    maximumPrice = null,
    count = 3,
    originalMenuItemId = null,
    baseUrl = 'https://demo-api.littledragon.keithswork.com',
    onAddToCart = null
  }) {
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [originalMenuItemName, setOriginalMenuItemName] = useState('');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef(null);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 50);
    setCanScrollRight(maxScroll > 0 && el.scrollLeft < maxScroll - 50);
  };

  const typeToName = (type) => {
    if (type === "best") return "Best Overall";
    if (type === "value") return "Best Value - High Quality Terpene Profiles";
    if (type === "exotic") return "Rare & Standout Terpene Profiles";
    if (type === "similar") return `Because You Bought: ${originalMenuItemName}`;
    return "";
  }

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(
          `${baseUrl}/${storeSlug}/recommendations/${productType}?type=${type}&min_price=${minimumPrice}&max_price=${maximumPrice}&original_id=${originalMenuItemId}&count=${count}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setRecommendations(data.recommendations);
        if (data.original) {
          setOriginalMenuItemName(`${data.original.brand} ${data.original.strain}`);
        } else {
          setOriginalMenuItemName(null);
        }
      } catch (err) {
        setError(err.message);
        setRecommendations(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [storeSlug, type, minimumPrice, maximumPrice, count, baseUrl, originalMenuItemId]);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    return () => el.removeEventListener('scroll', updateScrollButtons);
  }, [recommendations, loading]);

  return (
    <OuterContainer style={{ background: `${outerColor[type]}` }}>
      <Header>
        <Tooltip title={headerTooltip(type)} arrow>
          <div>
            {typeToName(type)}
          </div>
        </Tooltip>
      </Header>
      <InnerContainer>
        {loading && (
          <MessageContainer>
            {/* <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div> */}
            <Message>Loading recommendations...</Message>
          </MessageContainer>
        )}

        {error && type === "similar" && originalMenuItemId === null && (
          <MessageContainer>
            <Message>No original item selected to do a recommendation of similar items</Message>
          </MessageContainer>
        )}

        {!loading && !error && (!recommendations || recommendations.length === 0) && (
          <MessageContainer>
            <Message>No recommendations found</Message>
          </MessageContainer>
        )}

        {!loading && !error && recommendations && (
          <CarouselWrapper>
            {canScrollLeft && <CarouselButtonLeft onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}>&#8249;</CarouselButtonLeft>}
            <ItemsContainer ref={scrollRef}>
              {recommendations.map((item, index) => (
                <Item key={index}>
                  {index === 0 &&
                  <FirstItemLabel height={300} style={{ color: outerColor[type], opacity: 0.5, marginBottom: "50px" }} />
                  }
                  {index === 1 &&
                  <SecondItemLabel height={300} style={{ color: outerColor[type], opacity: 0.5, marginBottom: "50px" }} />
                  }
                  {index === 2 &&
                  <ThirdItemLabel height={300} style={{ color: outerColor[type], opacity: 0.5, marginBottom: "50px" }} />
                  }
                  <MenuItem item={item} onAddToCart={onAddToCart} />
                </Item>
              ))}
            </ItemsContainer>
            {canScrollRight && <CarouselButtonRight onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}>&#8250;</CarouselButtonRight>}
          </CarouselWrapper>
        )}
      </InnerContainer>
    </OuterContainer>
  );
}