import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Product} from '../types'

interface ProductApiResponse {
  products: Product[]
}

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductApiResponse, void>({
      query: () => '/products'
    })
  })
})

export const {useGetProductsQuery} = productsApi