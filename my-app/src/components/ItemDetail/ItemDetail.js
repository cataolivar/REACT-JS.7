import React from "react";
import UseItems from "../UseItems/UseItems";
import "./ItemDetail.css"

function ItemDetail ({productList}) {

    const onAdd = (cantidad) => {
        console.log(`Se agrego al carrito ${cantidad}`)}  

    return(
        <div>
            <h2 className="hItemDetail">Detalle de producto</h2>
            <h3 className="hItemDetail">{productList.name}</h3>
                <img className="imgItemDetail" src={productList.img} alt="img" />
                <p>{productList.description}</p>
                <h4><span>${productList.price}</span></h4>
                <UseItems stock={productList.stock} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail