import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

function Products() {
    const [ page, setPage ] = useState();
    const [ products, setProducts ] = useState();
    const [ render, setRender ] = useState(true);
    useEffect(() => {
        if(window.location.href.includes('CAT')) {
            setPage('CAT');
            setProducts([
                {
                    name: 'Air Conditioning Compressor w/ Clutch',
                    image: 'https://www.tractorpartsasap.com/media/klevu_images/200X200/a/i/air-conditioning-compressor-w-clutch-agco-117440_4ucsxnuzibtd_4.jpg',
                    price: '$405.99'
                },
                {
                    name: 'Condenser',
                    image: 'https://www.tractorpartsasap.com/media/klevu_images/200X200/c/o/condenser-new-caterpillar-2186807-123470_4trm88wyw3r4_2.jpg',
                    price: '$385.99'
                },
                {
                    name: 'Receiver Drier',
                    image: 'https://www.tractorpartsasap.com/media/klevu_images/200X200/r/e/receiver-drier-new-ford-new-holland-bobcat-hagie-117642_4ucu30bsiuxq.jpg',
                    price: '$45.99'
                }
            ]);
            setRender(false);
        } else {
            setPage('John Deere');
            setProducts([
                {
                    name: 'AC Compressor Clutch',
                    image: 'https://www.tractorpartsasap.com/media/catalog/product/cache/fa94d25e80fd69b255a64468c86d60de/a/c/ac-compressor-clutch-new-john-deere-re10975-165678_4ucuz5zpkr5p_2.jpg',
                    price: '$124.99'
                },
                {
                    name: 'Air Conditioner Compressor Conversion Kit',
                    image: 'https://www.tractorpartsasap.com/media/catalog/product/cache/fa94d25e80fd69b255a64468c86d60de/a/i/air-conditioner-compressor-conversion-kit-new-158468_4u7uzvlvhyes_67.jpg',
                    price: '$385.00'
                },
                {
                    name: 'Air Conditioning Compressor',
                    image: 'https://www.tractorpartsasap.com/media/catalog/product/cache/fa94d25e80fd69b255a64468c86d60de/a/i/air-conditioning-compressor-new-john-deere-114024_4u764z9jo7q4_44.jpg',
                    price: '$289.99'
                }
            ]);
            setRender(false);
        }
    }, [])
    return (
        <div>
            {render ? (
            <h1>Loading...</h1>
        ) : (
            <div className='content'>
                <h1>{page} Products</h1>
                <div className='products'>
                    {products.map(product => (
                        <ProductList name={product.name} image={product.image} price={product.price}/>
                    ))}
                </div>
            </div>
        )}
        </div>
        
    );
  }
  
  export default Products;