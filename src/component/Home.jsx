import React from 'react'
import Products from './Products';
import { Carousel, Navbar } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='hero'>
          
          <Carousel>
      <Carousel.Item>
        
        <img
          className="d-block w-100" style={{borderRadius:30,height:600}}
          src="https://img.freepik.com/premium-vector/online-shopping-depicts-trolley-very-fast-shipping-item_435359-14.jpg?size=626&ext=jpg&ga=GA1.2.764416310.1658750498"
        
        />
        
      </Carousel.Item>
      <Carousel.Item>
      
        <img
          className="d-block w-100" style={{borderRadius:30,height:600}}
          src="https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?size=626&ext=jpg&ga=GA1.2.764416310.1658750498"
          
        />

 
      </Carousel.Item>
      <Carousel.Item>
      
        <img
          className="d-block w-100" style={{borderRadius:30,height:600}}
          src="https://img.freepik.com/free-psd/new-collection-fashion-sale-web-banner-template_120329-1507.jpg?size=626&ext=jpg&ga=GA1.2.764416310.1658750498"
         
        />

       
      </Carousel.Item>
    </Carousel>
            <Products/>
        </div>
    )
}

export default Home;