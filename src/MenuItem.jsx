import styled from '@emotion/styled';
import Tooltip from '@mui/material/Tooltip';
import fallbackImage from './assets/fallback-image.jpg';
import caryophyleneImage from './assets/caryophylene.png';
import limoneneImage from './assets/limonene.png';
import linaloolImage from './assets/linalool.png';
import myrceneImage from './assets/myrcene.png';
import pineneImage from './assets/pinene.png';
import terpinoleneImage from './assets/terpinolene.png';

export default function MenuItem({
  index,
  item
}) {

  const terpImageMap = {
    beta_caryophylene: caryophyleneImage,
    delta_limonene: limoneneImage,
    linalool: linaloolImage,
    myrcene: myrceneImage,
    pinene: pineneImage,
    terpinolene: terpinoleneImage
  };

  const Container = styled.div`
    border-color: #cecece;
    background: #ffffff;
    border-width: 2px;
    border-radius: 30px;
    text-align: center;
    overflow: hidden;
  `;

  const InnerContainer = styled.div`
    padding: 10px 15px;
  `;

  const StrainName = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #e4002b;
    margin-bottom: 0.5em;
  `;

  const StrainInfo = styled.div`
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
  `;

  const BrandName = styled.div`
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    color: #e4002b;
    margin-bottom: 0.5em;
  `;

  const Price = styled.div`
    font-size: 24px;
    font-weight: 700;
  `;

  const PackageSize = styled.div`
    font-size: 15px;
    font-weight: 500;
  `;

  const TerpeneContainer = styled.div`
    margin-top: 10px;
    border-color: #cecece;
    border-width: 2px;
    border-radius: 32px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
  `;

  const TerpsLabel = styled.div`
    color: #adadad;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
  `;

  const AddToCartButton = styled.button`
    margin-top: 10px;
    width: 100%;
    background-color: #e4002b;
    border-radius: 32px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px 20px;
  `;

  return (
    <Container className="grow">
      <img 
        src={item.image_url || fallbackImage} 
        width={244}
        height={218}
        className="mx-auto"
      />
      <InnerContainer>
        <StrainName>{item.strain}</StrainName>
        <StrainInfo>THC: {item.thc_content}% | {item.cannabis_type.toUpperCase()}</StrainInfo>
        <BrandName>{item.brand}</BrandName>
        <Price>${item.price}</Price>
        <PackageSize>{item.grams}g</PackageSize>

        <TerpeneContainer>
          {item.dominant_terpenes.map((terpene, idx) => (
            <Tooltip key={terpene} title={`${terpene.name}: ${terpene.description}`} arrow>
              <img key={terpene.slug} src={terpImageMap[terpene.slug]} alt={terpene.name} width={53} height={53} />
            </Tooltip>
          ))}
        </TerpeneContainer>
        <TerpsLabel>Dominant Terps</TerpsLabel>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </InnerContainer>
    </Container>
  );
}
