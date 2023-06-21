import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "/assets/category/cat1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "/assets/category/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "/assets/category/cat3.png",
      cateName: "Cars",
    },
    {
      cateImg: "/assets/category/cat4.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "/assets/category/cat5.png",
      cateName: "Gifts",
    },
    {
      cateImg: "/assets/category/cat6.png",
      cateName: "Music",
    },
    {
      cateImg: "/assets/category/cat7.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "/assets/category/cat8.png",
      cateName: "Pets",
    },
    {
      cateImg: "/assets/category/cat10.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "/assets/category/cat10.png",
      cateName: "Groceries",
    },
    {
      cateImg: "/assets/category/cat11.png",
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f-flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories