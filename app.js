const db = firebase.firestore();

function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    
    db.collection("products").get().then((querySnapshot) => {
        productsGrid.innerHTML = ""; 
        
        querySnapshot.forEach((doc) => {
            const item = doc.data();
            
            productsGrid.innerHTML += `
                <div class="product-card">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p style="color: #00ffaa; font-weight: bold;">${item.price} دولار</p>
                    <button class="btn-primary">إضافة للسلة 🛒</button>
                </div>
            `;
        });
    }).catch((error) => {
        console.log("Error getting documents: ", error);
    });
}

document.addEventListener('DOMContentLoaded', loadProducts);
