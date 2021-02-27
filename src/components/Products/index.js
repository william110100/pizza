import React from 'react';
import { ProductsContainer, ProductHeading, ProductsWrapper, ProductCard, ProductImg, ProductInfo, ProductTitle, 
  ProductDesc, ProductPrice, ProductButton } from './Products.elements';

const Products = ({heading, data}) => {
  return (
    <ProductsContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductsWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductsWrapper>
    </ProductsContainer>
  );
}

export default Products;
