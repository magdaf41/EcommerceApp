import React, { useEffect } from 'react'
import ReturnBtn from '../components/ReturnBtn'
import {
	StyledContainerProductsList,
	StyledProduct,
	StyledProductsList,
	StyledProductsListHeader,
} from './ProductsList.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../store/cartSlice'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { removeProduct } from '../store/cartSlice'

const ProductsList = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.updateListOfProducts)
	const navigate = useNavigate()

	// const remove = value => {
	// 	dispatch(removeProduct(value.id))
	// 	console.log('działa')
	// 	console.log(dispatch(removeProduct(value)))
	// 	console.log(products)
	// }

	return (
		<StyledContainerProductsList>
			<ReturnBtn />
			<StyledProductsListHeader>
				<p>Lp.</p>
				<p>Id</p>
				<p>title</p>
				<p>description</p>
				<p>image</p>
				<p>price</p>
				<p>type</p>
				<p>category</p>
			</StyledProductsListHeader>
			<StyledProductsList>
				{products.map(p => (
					<StyledProduct>
						<p>{products.indexOf(p) + 1}</p>
						<p>{p.id}</p>
						<p>{p.title}</p>
						<p>{p.desc}</p>
						<img src={p.image}></img>
						<p>{p.price}</p>
						<p>{p.type}</p>
						<p>{p.category}</p>
						<p>
							<button>Edit</button>
							<button
								onClick={() => {
									dispatch(removeProduct(p))
									console.log(products)
								}}>
								Remove
							</button>
						</p>
					</StyledProduct>
				))}
				<button onClick={() => navigate('/newproduct')}>
					<span>Add new product</span>
				</button>
			</StyledProductsList>
		</StyledContainerProductsList>
	)
}

export default ProductsList