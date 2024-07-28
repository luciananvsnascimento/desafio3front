import '../styles/section-product.css'

const SectionProduct = () => {
  return (
    <div className="section-product">
        <div className="image-gallery">
            <div className="image-mini">
            <img className='collage-img' src='' alt="" />
            <img className='collage-img' src='' alt="" />
            <img className='collage-img' src='' alt="" />
            <img className='collage-img' src='' alt="" />
        </div>
        <div className="main-image">
        <img className='collage-img' src='' alt="" />
        </div>

        </div>
        <div className="info-product">
            <h2 className="name-product">Product Name</h2>
            <p className="price"></p>
            <img className='collage-img' src='' alt="" />
            <p className="description"></p>
            <p className="op-size">Size</p>
            <div>
                <button className="size-btn">Add to Cart</button>
                <button className="size-btn">Add to Cart</button>
                <button className="size-btn">Add to Cart</button>
            </div>
            <p className="color">Color</p>
            <div className="">
                <button className="color-btn"></button>
                <button className="color-btn"></button>
                <button className="color-btn"></button>
                <div className='quantity-control'>
              <button className='quantity-btn' >-</button>
              <p className='quantity'></p>
              <button className='quantity-btn'>+</button>
            </div>
            <button className="add-cart">Add To Cart</button>
            <hr/>
            <div className="left-infos">
                <p className="sku">SKU</p>
                <p className="category">category</p>
                <p className="tags">Tags</p>
                <p className="share">Share</p>
            </div>
            <div className="right-infos">
                <p className="sku"></p>
                <p className="category"></p>
                <p className="tags"></p>
                <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                <img src='https://img.icons8.com/ios/50/000000/facebook-new.png' alt='Facebook' />
                </a>
                <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                <img src='https://img.icons8.com/ios/50/000000/instagram-new.png' alt='Instagram' />
                </a>
                <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
                <img src='https://img.icons8.com/ios/50/000000/twitter.png' alt='Twitter' />
                </a>
            </div>
        </div>
    </div> 
    </div>
  )
}

export default SectionProduct;
