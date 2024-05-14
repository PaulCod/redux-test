import './style.css'
import { Product } from "../../app/types"
import { useAppDispatch } from '../../app/hooks'
import { addProduct } from '../../app/features/Cart/cartSlice'



export default function ProductCard({product, isCart}: {product: Product; isCart: boolean;}) {
  const dispatch = useAppDispatch()


  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.description} />
      <h3 className='product-title'>{product.title}</h3>
      <p className='product-description'>{product.description}</p>

      <div className='product-footer'>
        <span className='product-price'>R${product.price}</span>

        {!isCart ? <button className='btn-add-to-cart' onClick={() => dispatch(addProduct(product))}>Add to Cart</button> : <></>}
      </div>
    </div>
  )
}