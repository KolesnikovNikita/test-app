import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState, ChangeEvent } from 'react';
import { AppState } from "./rootReducer";
import { getProducts } from "../api/fetchProducts";
import { setProductAction } from "../redux/products";
import Product from "../interface/Product"
import { ProductState } from "../redux/products"

type Props = {
  list: Product[];
}

export const useProducts = (): Props => {
  const dispatch = useDispatch()
  const { list } = useSelector<AppState,ProductState>(state => state.products)

  useEffect(() => {
    getProducts({}).then(res => {
      dispatch(setProductAction(res.data.data.products))
    })
  }, [dispatch])


  return {
    list
  }
}
