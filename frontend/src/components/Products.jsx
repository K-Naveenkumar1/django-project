import React, { useEffect, useState } from 'react'

function Products(){
    const [ products , setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/api/products/")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
            setLoading(false);
        })
        .catch((err) => console.error(err));
    }, []);

    if (loading) return <p style={{ textAlign: "center" }}>Loading Products.....</p>

    return(
        <div style={styles.grid}>
            {products.map((product) => (
                <div key={product.id} style={styles.card}>
                    <img src={product.image} alt={product.title} style={styles.img}/>
                    <h4>{product.title.slice(0,40)}...</h4>
                    <p>${product.price}</p>
                </div>

            ))}
        </div>
    )
}

const styles={
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
        gap: "20px",
        padding: "40px",
    },
      card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
  },
  img: { height: "150px", objectFit: "contain" ,width: "140px" },
}
export default Products