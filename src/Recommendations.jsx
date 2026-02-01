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
    background: ${outerColor[type]};
    padding: 6px;
    border-radius: 30px;
    max-width: 1410px;
  `;

  const InnerContainer = styled.div`
    background: white;
    border-radius: 30px;
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
    <OuterContainer className="mx-auto">
      <Header>{typeToName(type)}</Header>
      <InnerContainer className="mx-auto">
        {loading && (
          <div className="p-12 text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading recommendations...</p>
          </div>
        )}

        {error && type === "similar" && originalMenuItemId === null && (
          <div className="p-12 text-center">
            <p className="mt-4 text-gray-600">No original item selected to do a recommendation of similar items</p>
          </div>
        )}

        {!loading && !error && (!recommendations || recommendations.length === 0) && (
          <div className="p-12 text-center">
            <p className="mt-4 text-gray-600">No recommendations found</p>
          </div>
        )}

        {!loading && !error && recommendations && (
          <div className="p-6">
            <div className="flex flex-row gap-6">
              {recommendations.map((item, index) => (
                <div key={index} className="flex flex-row items-end">
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
                </div>
              ))}
            </div>
          </div>
        )}
      </InnerContainer>
    </OuterContainer>
  );
}