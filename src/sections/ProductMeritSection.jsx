import React from 'react'



const ProductMeritSection = ({ImageUrl, title, desc, para, sectionStyle , btnColor}) => {
  return (
    <div className='container mx-auto w-full h-auto py-12 px-10' >
        <div className={`w-full h-auto flex lg:flex-row  flex-col gap-8 items-center justify-center  ${sectionStyle}`} >
            <div className="leftSecMerit w-full h-130  ">
                <img className='object-contain object-center w-full h-full'  src={ImageUrl} alt="" />
            </div>
            <div className="rightSecMerit w-full flex flex-col  gap-6 ">
                <h3 className='text-4xl font-semibold ' >{title}</h3>
                <h4 className='text-3xl font-semibold' >{desc}</h4>
                <p className='text-base' >{para}
                </p>
                <button className={`${btnColor} text-white px-6 p-4 w-fit`} >Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default ProductMeritSection