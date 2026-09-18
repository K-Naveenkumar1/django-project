import React from 'react';
import Products from "../components/Products"

function Product(){
    return(
        <div>
            <h1 style={styles.h1}>Our Products</h1>
            <Products />
        </div>
    )
}

const styles ={
    h1:{
        display:"flex",
        justifyContent: "center",
        padding:"30px 0px 0px 0px"
    }
}

export default Product