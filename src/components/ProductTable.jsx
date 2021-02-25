 
import React from 'react'
import ProductRow from './ProductRow'

class  ProductTable extends React.Component{

  
 render(){
     
    let filteredProducts =[...this.props.products].filter(product=>{
        return product.name.toLowerCase().includes(this.props.productName.toLowerCase())
  })

    return (
        <table>
          <thead>
             <tr>
               <th>Name</th>
               <th>Price</th> 
             </tr>
          </thead>
          <tbody>
         {filteredProducts.map(product=> 
         <ProductRow 
          key={product.id}
          name={product.name}
          price={product.price}
          /> )}
         
 
          </tbody>
         
        </table>
    )
 }

}


export default ProductTable