import './style.css'
import { useGetProductsQuery } from '../../app/service/dummyData'
import ProductCard from '../ProductCard'


export default function Main() {
  const {isError, isLoading, data} = useGetProductsQuery()

  if (isError) {
    return <div>Error</div>
  }

  if (isLoading) {
    return <div>Loading</div>
  }

  if (!data || data.products.length === 0) {
    return <div>No data</div>
  }

  return ( 
    <main className="main">

      <section className="products">
        <h2>Products</h2>

        <div className='grid'>
          {data.products.map((product) => (
            <ProductCard isCart={false} key={product.id} product={product}/>
          ))}
        </div>

        <button className='btn-add-to-cart'>Add to Cart</button>
      </section>
      
    </main>
  )
}