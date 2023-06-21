import React, { useState } from "react"

const ShopCart = ({ shopItems, addToCart }) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }

    return (
        <>
            {shopItems.map((shopItems, index) => {
                return (
                    <div className='box'>
                        <div className='product mtop'>
                            <div className='img'>
                                <span className='discount'>{shopItems.discount}% Off</span>
                                <img src={shopItems.cover} alt='' />
                                <div className='product-like'>
                                    <label>{count}</label> <br />
                                    <i onClick={increment}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </i>
                                </div>
                            </div>
                            <div className='product-details'>
                                <h3>{shopItems.name}</h3>
                                <div className='rate'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </div>
                                <div className='price'>
                                    <h4>${shopItems.price}.00 </h4>
                                    <button onClick={() => addToCart(shopItems)}>
                                        <i className='fa fa-plus'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ShopCart