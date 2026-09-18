import React from 'react'

function Footer(){
    return(
        <footer style={styles.footer}>
            <p> 2026 Fakestore. All rights reserved.</p>
        </footer>
    )
}

const styles ={
    footer: {
        textAlign: "center",
        padding: "20px",
        background: "grey",
        color: "#fff",
    }
}

export default Footer