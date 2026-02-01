import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MenuItem from './MenuItem';
import FirstItemLabel from './assets/1.svg?react';
import SecondItemLabel from './assets/2.svg?react';
import ThirdItemLabel from './assets/3.svg?react';

export default function Recommendations({
    storeId, 
    type = 'value',
    mininumGrams = 3.5,
    maximumGrams = 3.5,
    minimumPrice = null,
    maximumPrice = null,
    count = 3,
    originalMenuItemId = null,
    baseUrl = 'https://demo-api.littledragon.keithswork.com'
  }) {
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [originalMenuItemName, setOriginalMenuItemName] = useState('');

  const outerColor = {
    value: "#32936f",
    exotic: "#2274a5",
    similar: "#e4002b",
    best: "#ffbf00"
  }

  const typeToName = (type) => {
    if (type === "best") return "Best Overall";
    if (type === "value") return "Best Value - Top Genetics";
    if (type === "exotic") return "Most Exotic";
    if (type === "similar") return `Because You Bought: ${originalMenuItemName}`;
    return "";
  }

  const OuterContainer = styled.div`
    all: reset;
    background: ${outerColor[type]};
    padding: 6px;
    border-radius: 30px;
    max-width: 1410px;
    margin-inline: auto;
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
    font-size: 40px;
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
  `;

  const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  `;

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(
          `${baseUrl}/${storeId}/recommendations?type=${type}&min_grams=${mininumGrams}&max_grams=${maximumGrams}&min_price=${minimumPrice}&max_price=${maximumPrice}&original_id=${originalMenuItemId}&count=${count}`
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
  }, [storeId, type, mininumGrams, maximumGrams, minimumPrice, maximumPrice, count, baseUrl, originalMenuItemId]);

  return (
    <OuterContainer>
      <Header>{typeToName(type)}</Header>
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
          <ItemsContainer>
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
              <MenuItem item={item} />
              </Item>
            ))}
          </ItemsContainer>
        )}
      </InnerContainer>
    </OuterContainer>
  );
}