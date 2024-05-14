import { useAppSelector } from "../../app/hooks";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";

export default function CartPage() {
  const products = useAppSelector((state) => state.cartReducer.products)
  return (
    <>
      <Header />
      <main>
        <h1>Cart Page</h1>
        {products.length != 0 ? products.map((product) => <ProductCard isCart key={product.id} product={product} />) : <p>Cart is empty</p>}
      </main>
      <Footer />
    </>
  )
}