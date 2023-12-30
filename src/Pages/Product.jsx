import React, { useEffect, useState } from 'react'
import CardProduct from '../Components/Fragments/CardProduct'
import { Navbar } from '../Components/Fragments/Navbar'
import { Button } from '../Components/Fragment/Button/ButtonForm'

const Products = [
    {
        id:1,
        name: "Nigga Shirt",
        image: "/image/product-1.jpg",
        price: 100000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet!"
    },
    {
        id:2,
        name: "Nigga Tshirt",
        image: "/image/product-1.jpg",
        price: 250000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet! lorem adhwi asodos aosndfsad"
    },
    {
        id:3,
        name: "shirt",
        image: "/image/product-1.jpg",
        price: 175000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet!adasdafasf a fdafasf af af"
    }
]

const email = localStorage.getItem('email')

export const ProductPage = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || [])
    }, [])

    useEffect(() => {
        if (cart.length > 0 || cart.length === 0) {
            const sum = cart.reduce((total, item) => {
                const product = Products.find(product => product.id === item.id)
                return total + (product.price * item.qty);
            }, 0)
            setTotalPrice(sum)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart])


    const LogoutHandling = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        window.location.href = '/login'
        console.log("halo")
    }

    const deleteProduct = (id) => {
        cart.find(item => item.id === id && item.qty === 1) ? setCart(cart.filter(item => item.id !== id)) : setCart(cart.filter(item => item.id !== id))
    }
    const AddToCart = (id) => {
        if(cart.find(item => item.id === id)) {
            setCart(cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item))
        } else {
            setCart([...cart, {id, qty: 1}])
        }
    }


  return (
    <div>
        <Navbar>
            <div className='flex px-4'>
                <p className='px-3'>{email}</p>
                <Button className={'bg-blue-200 hover:bg-blue-500'} onClick={LogoutHandling}>Log Out</Button>
            </div>
        </Navbar>
        <div className='flex justify-center py-2 flex-wrap'>
            <div className='w-4/6 flex flex-wrap gap-4'>
                {Products.map(product => 
                    <CardProduct key={product.id}>
                        <CardProduct.Header src={product.image} alt={product.name}/>
                        <CardProduct.Body title={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} addToCart={() => AddToCart(product.id)} id={product.id}/>
                    </CardProduct>
                )}
            </div>
            <div className='w-2/6'>
                <h1 className='text-2xl font-bold text-blue-600 text-center'>Cart</h1>
                <table className='text-left table-auto border-separate border-spacing-x-5'>
                    <thead>
                        <th>Product</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </thead>
                    <tbody>
                        {cart.map((item) => {
                            const product = Products.find((product) => product.id === item.id);
                            return (
                                <tr key={item.id}>
                                    <td>{product.name}</td>
                                    <td>Rp. {product.price.toLocaleString('id-ID', { styles: "currency", currency: "IDR"})}</td>
                                    <td>{item.qty}</td>
                                    <td>Rp. {(item.qty * product.price).toLocaleString('id-ID', { styles: "currency", currency: "IDR"})}</td>
                                    <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td colSpan={3}><b>Total Price</b></td>
                            <td>
                                <b>Rp. {totalPrice.toLocaleString('id-ID', { styles: "currency", currency: "IDR"})}</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}