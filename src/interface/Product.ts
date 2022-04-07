export default interface Product {
  product_id: string;
  name: string;
  quantity_nfts_created: number;
  quantity_available: number;
  initial_price: number;
  created_by: Author;
}

interface Author {
  display_name: string;
}