import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
                <i className='fa fa-arrow-right'></i>
            </button>
        </div>
    )
}
const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <i className='fa fa-arrow-left'></i>
            </button>
        </div>
    )
}
const FlashCard = ({ productItems, addToCart }) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    return (
        <>
            <Slider {...settings}>
                {productItems.map((productItems) => {
                    return (
                        <div className='box' key={productItems.id}>
                            <div className='product mtop'>
                                <div className='img'>
                                    <span className='discount'>{productItems.discount}% Off</span>
                                    <img src={productItems.cover} alt='' />
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
                                    <h3>{productItems.name}</h3>
                                    <div className='rate'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                    <div className='price'>
                                        <h4>${productItems.price}.00 </h4>
                                        <button onClick={() => addToCart(productItems)}>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}

export default FlashCard