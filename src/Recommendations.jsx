import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import RecommendationsList from './RecommendationsList';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

export default function Recommendations({
    storeSlug, 
    productType,
    baseUrl = 'https://demo-api.littledragon.keithswork.com',
    onAddToCart = null,
    userId = null
  }) {

  const [availableRecommendations, setAvailableRecommendations] = useState([]);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  useEffect(() => {
    const fetchAvailableRecommendations = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/${storeSlug}/users/${userId}/recommendations/${productType}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setAvailableRecommendations(data);
      } catch (err) {
        setError(err.message);
        setRecommendations(null);
      } finally {
        setLoading(false);
      }
    }

    if (userId === null) {
      setAvailableRecommendations([]);
    } else {
      fetchAvailableRecommendations();
    }
  }, [userId]);

  return (
    <Swiper autoplay={{delay: 10000, disableOnInteraction: true}}
            pagination={{clickable: true}} 
            loop={true} 
            modules={[Autoplay, Navigation, Pagination]} 
            centeredSlides={true}
            spaceBetween={30}
            onAutoplayTimeLeft={onAutoplayTimeLeft}>
      <SwiperSlide>
        <RecommendationsList
          storeSlug={storeSlug}
          productType={productType}
          type="value"
          baseUrl={baseUrl}
          onAddToCart={onAddToCart}
        />
      </SwiperSlide>
      <SwiperSlide>
        <RecommendationsList
          storeSlug={storeSlug}
          productType={productType}
          type="exotic"
          baseUrl={baseUrl}
          onAddToCart={onAddToCart}
        />
      </SwiperSlide>
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
}
