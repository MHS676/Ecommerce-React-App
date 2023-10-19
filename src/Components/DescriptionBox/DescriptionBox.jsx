import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An E-commerce website serves as a virtual marketplace where businesses and consumers come together for the purpose of buying and selling products and services online. In today's digital age, the importance of a well-designed and functional ecommerce platform cannot be overstated. Whether you are a small startup or a well-established brand, having an e-commerce website is essential to reach a global audience, increase sales, and provide a seamless shopping experience.</p>
        <p>he core elements of a successful e-commerce website include an intuitive user interface, secure payment processing, a wide range of product categories, and easy navigation. The design should be visually appealing, mobile-responsive, and optimized for search engines to attract organic traffic. High-quality product images, detailed descriptions, and customer reviews further enhance the shopping experience, allowing customers to make informed decisions.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
