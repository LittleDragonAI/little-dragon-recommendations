import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from './MenuItem';
import FirstItemLabel from './assets/1.svg?react';
import SecondItemLabel from './assets/2.svg?react';
import ThirdItemLabel from './assets/3.svg?react';
import './style.css';

const outerColor = {
  value: "#32936f",
  exotic: "#2274a5",
  similar: "#e4002b",
  best: "#ffbf00",
  brand: "#414141"
}

const headerTooltip = (type) => {
  if (type === "similar") return "Curated recommendations inspired by your recent purchases. More of what you're likely to love.";
  if (type === "value") return "Highest rated terpene profiles per dollar.";
  if (type === "exotic") return "Highest rated terpene profiles.";
  return "Terpenes give Cannabis its aroma, flavor & quality";
}

export default function RecommendationsList({
    storeSlug, 
    productType = 'flower',
    type = 'value',
    minimumPrice = null,
    maximumPrice = null,
    count = 3,
    originalMenuItemId = null,
    brand = null,
    excludeBrands = null,
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
    if (type === "brand") return `Best of ${brand}`;
    if (type === "exotic") return "Rare & Standout Terpene Profiles";
    if (type === "similar") return `Because You Bought: ${originalMenuItemName}`;
    return "";
  }

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const recommendationType = type === "brand" ? "exotic": type;
        let params = `type=${recommendationType}`
        if (minimumPrice !== null) params += `&min_price=${minimumPrice}`;
        if (maximumPrice !== null) params += `&max_price=${maximumPrice}`;
        if (originalMenuItemId !== null) params += `&original_id=${originalMenuItemId}`;
        if (count !== null) params += `&count=${count}`;
        if (brand !== null) params += `&brand=${brand}`;
        if (excludeBrands !== null) params += `&exclude_brands=${excludeBrands}`;
        const response = await fetch(
          `${baseUrl}/${storeSlug}/recommendations/${productType}?${params}`
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
  }, [storeSlug, type, minimumPrice, maximumPrice, count, baseUrl, originalMenuItemId, brand, productType]);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    return () => el.removeEventListener('scroll', updateScrollButtons);
  }, [recommendations, loading]);

  return (
    <div className='little-dragon-rec-outer-container' style={{ background: `${outerColor[type]}` }}>
      <h2 className='little-dragon-rec-header'>
        {type === 'value' && (
          <>
            <Tooltip title={headerTooltip(type)} arrow>
              <span>
                Best Value
              </span>
            </Tooltip>
            &nbsp;-&nbsp;
            <Tooltip title={headerTooltip('terpene')} arrow>
              <span>
                High Quality Terpene Profiles
              </span>
            </Tooltip>
          </>
        )}
        {type === 'exotic' && (
          <>
            <Tooltip title={headerTooltip(type)} arrow>
              <span>
                Rare &amp; Standout
              </span>
            </Tooltip>
            &nbsp;
            <Tooltip title={headerTooltip('terpene')} arrow>
              <span>
                Terpene Profiles
              </span>
            </Tooltip>
          </>
        )}
        {type !== 'value' && type !== 'exotic' && (
          <Tooltip title={headerTooltip(type)} arrow>
            <div>
              {typeToName(type)}
            </div>
          </Tooltip>
        )}
      </h2>
      <div className='little-dragon-rec-inner-container'>
        {loading && (
          <div className='little-dragon-rec-message-container'>
            <p className='little-dragon-rec-message'>Loading recommendations...</p>
          </div>
        )}

        {error && type === "similar" && originalMenuItemId === null && (
          <div className='little-dragon-rec-message-container'>
            <p className='little-dragon-rec-message'>No original item selected to do a recommendation of similar items</p>
          </div>
        )}

        {!loading && !error && (!recommendations || recommendations.length === 0) && (
          <div className='little-dragon-rec-message-container'>
            <p className='little-dragon-rec-message'>No recommendations found</p>
          </div>
        )}

        {!loading && !error && recommendations && (
          <div className='little-dragon-rec-carousel-wrapper'>
            {canScrollLeft && <button className='little-dragon-rec-carousel-button left' onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}>&#8249;</button>}
            <div className='little-dragon-rec-items-container' ref={scrollRef}>
              {recommendations.map((item, index) => (
                <div className='little-dragon-rec-item' key={index}>
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
                </div>
              ))}
            </div>
            {canScrollRight && <button className='little-dragon-rec-carousel-button right' onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}>&#8250;</button>}
          </div>
        )}
      </div>
    </div>
  );
}