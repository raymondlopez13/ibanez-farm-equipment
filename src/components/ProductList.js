import React from 'react';

function ProductList(props) {
    
    return (
        <div className='Product' key={props.name}>
            <img src={`/images/${props.image}`} alt='tractor part' />
            <div>
                <h3>{props.price}</h3>
                <h4>{props.name}</h4>
            </div>
            <button>View Details</button>
        </div>
    );
  }
  
  export default ProductList;