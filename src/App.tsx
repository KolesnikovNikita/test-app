import React, { useState } from "react";
import { useProducts } from "./init/useProducts";
import Product from "./page/Products";
import {
  H1,
  Paragraph,
  InnerContainer,
  Section,
  ProductList,
} from "./app_styles";
import SelectAvaible from "./page/SelectAvaible";

function App() {
  const { list } = useProducts();
  const [avaibleQuanttity, setAvaibleQuantity] = useState<boolean>(false);
  const products = avaibleQuanttity
    ? list.filter((item) => item.quantity_available > 0)
    : list;
  return (
    <Section>
      <InnerContainer>
        <H1>Explore</H1>
        <Paragraph>Buy and sell digital fashion NFT art</Paragraph>
        <Paragraph>
          <SelectAvaible
            value={avaibleQuanttity}
            handleChange={setAvaibleQuantity}
          />
        </Paragraph>
        <ProductList>
          {products.map((product) => (
            <Product key={product.product_id} {...product} />
          ))}
        </ProductList>
      </InnerContainer>
    </Section>
  );
}

export default App;
