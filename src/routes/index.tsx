import { component$ } from '@builder.io/qwik'
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city'
import axios from 'axios'
import { ProductItem } from '~/components/product-item'

export type productType = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export const useProductList = routeLoader$(async () => {
  const res = await axios.get<{ products: productType[] }>('https://dummyjson.com/products')
  return res.data.products
})

export default component$(() => {
  const { value: productList } = useProductList()
  return (
    <>
      <ul class='w-full h-full p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 rounded-lg'>
        {productList.map((p) => <ProductItem key={p.id} product={p} />)}
      </ul>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
}
