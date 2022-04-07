import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle `
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

body {
min-width: 320px;
min-height: 100vh;
margin: 0;
padding: 0;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 1.5;

color: black;  
}
`
export const Section = styled.section`
padding-top: 15px;
`

export const InnerContainer = styled.div`
max-width: 768px;
width: 100%;
margin-left: auto;
margin-right: auto;
padding-left: 16px;
padding-right: 16px;

@media (min-width: 1024px) {
   padding-left: 32px;
   padding-right: 32px;
   max-width: none; 
}

`

export const FlexContainer = styled.div`
@media (min-width: 1024px) {
      max-width: 992px;
      display: flex;
  }
`

export const ProductContainer = styled.div`
max-width: 100%;
margin-left: auto;
margin-right: auto;
width: 305px;
background: #FFFFFF;
box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.07);
border-radius: 7px;
margin-bottom: 16px;
position: relative;
img {
  border-radius: 7px 7px 0px 0px;
}
@media (min-width: 1024px) {
      margin-left: 0;
      margin-right: 32px;
  }
`
export const CreatedBy = styled.div`
z-index: 1;
position: absolute;
top: 16px;
left: 16px;
font-family:"Open Sans", Arial, sans-serif;
font-weight: 400;
font-size: 12px;
color: #f3f3f3;
p {
  margin: 0;
  font-weight: 700;
  font-size: 14px;
}
color: #ffffff;
`

export const Title = styled.div`
position: absolute;
font-size: 18px;
bottom: 32px;
right: 16px;
left: 16px;
color: white;
font-family: "Open Sans", Arial, sans-serif;
font-weight: #ffffff;
`

export const H1 = styled.h1`
line-height: 1.25;
margin: 0;
margin-bottom: 25px;
font-size: 32px;
font-weight: 700;
font-family: "Open Sans", Arial, sans-serif;
`

export const Paragraph = styled.p`
margin: 0;
margin-bottom: 25px;
font-weight: 400;
font-family: "Open Sans", Arial, sans-serif;
color: #828282;
font-size: 14px;
letter-spacing: 1%;
`
export const DescriptionContainer = styled.div`
display: flex;
justify-content: space-between;
padding-top: 7px;
padding-left: 15px;
padding-right: 15px;
padding-bottom: 16px;
p {
  margin: 0;
  padding-bottom: 5px;
  font-size: 12px;
  font-weight: 400;
  font-family: "Open Sans", Arial, sans-serif;
  color: #828282;
}
`
export const ProductImage = styled.img`
width: 100%;
`
export const ProductPriceLabel = styled.span`
display: block;
color: #828282;
text-align: right;
`

export const ProductPriceValue = styled.span`
display: block;
color: blue;
font-weight: 700;
`
export const ProductAvailableValue = styled.span`
font-weight: 700;
`
export const ImageWrapper = styled.div`
position: relative;
`
export const ImageMask = styled.span`
border-radius: 7px 7px 0px 0px;
position: absolute;
top: 0;
left: 0;
width:100%;
height: 100%;
background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%);
`
export const ProductList = styled.div`
@media (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
  }
  @media (min-width: 1024px) {
      margin-right: -32px;
  }
`