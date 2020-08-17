import React from "react"

function Product(props) {
    return (
         <div>
            <h3 style={{display: props.product.name}}>Name: {props.product.name}</h3>
            <h3>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h3>
            <h3 style={{display: props.product.description}}>Description: props.product.description}</h3>
            <hr/>
        </div>
    )
}

export default Product
