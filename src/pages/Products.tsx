import React, { FC } from "react";
import {
  DescriptionContainer,
  ProductContainer,
  CreatedBy,
  Title,
  ProductImage,
  ProductPriceLabel,
  ProductPriceValue,
  ProductAvailableValue,
  ImageWrapper,
  ImageMask,
} from "../app_styles";
import image from "../img/product_image.png";

interface Author {
  display_name: string;
}

type Props = {
  name: string;
  quantity_nfts_created: number;
  product_id: string;
  quantity_available: number;
  initial_price: number;
  created_by: Author;
};

const Product: FC<Props> = ({
  initial_price,
  quantity_nfts_created,
  quantity_available,
  created_by,
  name,
}) => {
  return (
    <ProductContainer>
      <CreatedBy>
        created by<p>{created_by.display_name}</p>
      </CreatedBy>
      <ImageWrapper>
        <ImageMask />
        <ProductImage src={image} width="305" height="407" />
        <Title>{name}</Title>
      </ImageWrapper>
      <DescriptionContainer>
        <div>
          <p>available</p>
          <ProductAvailableValue>
            {quantity_available} of {quantity_nfts_created}
          </ProductAvailableValue>
        </div>
        <div>
          <ProductPriceLabel>price</ProductPriceLabel>
          <ProductPriceValue>{initial_price} ETH</ProductPriceValue>
        </div>
      </DescriptionContainer>
    </ProductContainer>
  );
};

export default Product;
