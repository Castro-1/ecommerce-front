import { styled } from "styled-components";
import Link from "next/link";
import FlyingButton from "./FlyingButton";

const ProductWrapper = styled.div`
  button {
    width: 100%;
    justify-content: center;
  }
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0;
  color: inherit;
  text-decoration: none;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }
`;

export default function ProductWhiteBox({
  _id,
  name,
  description,
  price,
  images,
}) {
  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images[0]} alt="product image" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{name}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <FlyingButton primary="true" outline="true" src={images[0]} _id={_id}>
            Add to cart
          </FlyingButton>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
