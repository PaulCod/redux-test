import "./style.css"
import {Basket} from "@phosphor-icons/react"
import { useAppSelector } from "../../app/hooks"
import {Link} from 'react-router-dom'

export default function Header() {
  const products = useAppSelector((state) => state.cartReducer.products )

  const quantityProducts = products.length

  return (
    <header className="header">
      <div className="content-header">
        <h1 className="Logo">Logo</h1>  

        <div className="search">
          <input type="search-input" placeholder="Search" />
        </div>

        <div>
          <Link to="/cart">
            <Basket size={32} accumulate="sum"/>
            <span>{quantityProducts}</span>
          </Link>
        </div>
      </div>
    </header>
  )
}