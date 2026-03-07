import { useState } from 'react';
import styled from '@emotion/styled';
import Tooltip from '@mui/material/Tooltip';
import fallbackImage from './assets/fallback-image.jpg';
import bisabololImage from './assets/bisabolol.png';
import caryophyleneImage from './assets/caryophylene.png';
import farneseneImage from './assets/farnesene.png';
import humuleneImage from './assets/humulene.png';
import limoneneImage from './assets/limonene.png';
import linaloolImage from './assets/linalool.png';
import myrceneImage from './assets/myrcene.png';
import nerolidolImage from './assets/nerolidol.png';
import ocimeneImage from './assets/ocimene.png';
import pineneImage from './assets/pinene.png';
import terpineolImage from './assets/terpineol.png';
import terpinoleneImage from './assets/terpinolene.png';

const terpImageMap = {
  beta_caryophylene: caryophyleneImage,
  bisabolol: bisabololImage,
  delta_limonene: limoneneImage,
  farnesene: farneseneImage,
  humulene: humuleneImage,
  linalool: linaloolImage,
  myrcene: myrceneImage,
  nerolidol: nerolidolImage,
  ocimene: ocimeneImage,
  pinene: pineneImage,
  alpha_terpineol: terpineolImage,
  gamma_terpineol: terpineolImage,
  terpinolene: terpinoleneImage
};

const terpeneNames = {
  bisabolol: "Bisabolol",
  borneol: "Borneol",
  camphene: "Camphene",
  three_carene: "3-Carene",
  alpha_caryophylene: "α-Caryophylene",
  beta_caryophylene: "β-Caryophylene",
  alpha_cedrene: "α-Cedrene",
  cedrol: "Cedrol",
  eight_cineole: "8-Cineole",
  eucalyptol: "Eucalyptol",
  farnesene: "Farnesene",
  fenchol: "Fenchol",
  fenchone: "Fenchone",
  geraniol: "Geraniol",
  geranyl_a: "Geranyl-A",
  guaiol: "Guaiol",
  hexahydrothymol: "Hexahydrothymol",
  humulene: "Humulene",
  isoborneol: "Isoborneol",
  isopulegol: "Isopulegol",
  delta_limonene: "δ-Limonene",
  linalool: "Linalool",
  p_mentha: "P-Mentha",
  myrcene: "Myrcene",
  nerol: "Nerol",
  nerolidol: "Nerolidol",
  ocimene: "Ocimene",
  phytol: "Phytol",
  pinene: "Pinene",
  beta_pinene: "β-Pinene",
  pulegone: "Pulegone",
  sabinene: "Sabinene",
  sabinene_h: "Sabinene-H",
  alpha_terpinene: "α-Terpinene",
  gamma_terpinene: "γ-Terpinene",
  alpha_terpineol: "α-Terpineol",
  gamma_terpineol: "γ-Terpineol",
  terpinolene: "Terpinolene",
  valencene: "Valencene"
};

const terpeneDescriptions = {
  delta_limonene: "Hints of Citrus may be detected",
  linalool: "Floral Hints may be detected",
  alpha_caryophylene: "Hints of Pepper may be detected",
  beta_caryophylene: "Hints of Pepper may be detected",
  humulene: "Hints of Spice may be detected",
  myrcene: "Earthy Aroma Hints may be detected",
  ocimene: "Minty Aroma Hints may be detected",
  bisabolol: "Floral & Woody Aroma Hints may be detected",
  terpinolene: "Hints of Herbal & Pine may be detected",
  pinene: "Hints of Pine may be detected",
  beta_pinene: "Hints of Pine may be detected",
  farnesene: "Hints of Apple may be detected",
  alpha_terpineol: "Hints of Eucalyptus may be detected",
  gamma_terpineol: "Hints of Eucalyptus may be detected",
  nerolidol: "Hints of Floral may be detected",
};

const Container = styled.div`
  background: #ffffff;
  border: 2px solid #cecece;
  border-radius: 30px;
  text-align: center;
  overflow: hidden;
`;

const InnerContainer = styled.div`
  padding: 10px 15px;
`;

const StrainName = styled.div`
  font-size: 125%;
  font-weight: 700;
  color: #e4002b;
  margin-bottom: 0.5em;
`;

const StrainInfo = styled.div`
  font-size: 100%;
  font-weight: 500;
  text-transform: uppercase;
`;

const BrandName = styled.div`
  font-size: 100%;
  font-weight: 500;
  text-transform: uppercase;
  color: #e4002b;
  margin-bottom: 0.5em;
`;

const Price = styled.div`
  font-size: 125%;
  font-weight: 700;
`;

const PackageSize = styled.div`
  font-size: 100%;
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
  font-size: 75%;
  font-weight: 600;
  text-transform: uppercase;
`;

const AddToCartButton = styled.button`
  margin-top: 10px;
  width: 100%;
  background-color: #e4002b;
  border-radius: 32px;
  color: white;
  font-size: 100%;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #bf0030;
  }
`;

const ItemImage = styled.img`
  margin-inline: auto;
`;

export default function MenuItem({
  item,
  onAddToCart = null
}) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const terpenesToShow = () => {
    return Object.entries(item.terpenes).sort((a, b) => b[1] - a[1]).map((a) => a[0]).slice(0, 3);
  };

  return (
    <Container>
      <ItemImage
        src={item.image_url || fallbackImage}
        width={244}
        height={218}
      />
      <InnerContainer>
        <StrainName>{item.strain}</StrainName>
        <StrainInfo>THC: {item.thc_content}% | {item.cannabis_type.toUpperCase()}</StrainInfo>
        <BrandName>{item.brand}</BrandName>
        <Price>${item.price}</Price>
        <PackageSize>{item.grams}g</PackageSize>

        <TerpeneContainer>
          {terpenesToShow().map((terpene, idx) => (
            <Tooltip key={terpene} title={`${terpeneNames[terpene]}: ${terpeneDescriptions[terpene]}`} arrow>
              <img key={terpene} src={terpImageMap[terpene]} alt={terpeneNames[terpene]} width={32} height={32} />
            </Tooltip>
          ))}
        </TerpeneContainer>
        <TerpsLabel>Terpene Profile</TerpsLabel>
        <AddToCartButton onClick={handleAddToCart}>{added ? 'Added' : 'Add to Cart'}</AddToCartButton>
      </InnerContainer>
    </Container>
  );
}
