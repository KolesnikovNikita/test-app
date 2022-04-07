import axios from "./axios";
import { AxiosPromise } from "axios";
import Product from "../interface/Product";

type FilterType = {
  quantity_available?: number;
}

type ResponseType = {
  data: {
    products: Product[]
  }
}


export const getProducts = ( queryParams: FilterType  ): AxiosPromise<ResponseType> => {
 return axios.get("/products", { params: queryParams })
}