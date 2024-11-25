document.getElementById('Order').addEventListener('change', function () {
    const selectedOrder = this.value;

    if (selectedOrder !== "#") {
        document.querySelectorAll('.Product-Eval').forEach(product => {
            product.style.display = 'flex'; 
        });
    }
});

document.getElementById('Submit-feedback').addEventListener('click', function (event) {
    event.preventDefault();

    const orderSelect = document.getElementById('Order');
    const selectedOrder = orderSelect.value;

    const productCheckboxes = document.querySelectorAll('.Product-Eval input[type="checkbox"]');
    const isProductSelected = Array.from(productCheckboxes).some(checkbox => checkbox.checked);

    const stars = document.querySelectorAll('.Stars img');
    let userRating = Array.from(stars).filter(star => star.src.includes('fullstar.PNG')).length;

    if (selectedOrder === "#" || userRating === 0 || !isProductSelected) {
        alert("Please make sure you selected an order, a rating, and at least one product.");
        return;
    }

    const selectedProducts = Array.from(productCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.closest('.Product-Eval').querySelector('h3').innerText);

    alert(`Thank you for your feedback!\nYour rating for products: ${selectedProducts.join(', ')} is ${userRating}`);

    window.location.href = "Home.html"; 
});


const stars = document.querySelectorAll('#star .Stars img');

function resetStars() {
    stars.forEach((star) => {
        star.src = 'images/emptystar.PNG'; 
    });
}

// Add click event listener to each star
stars.forEach((star) => {
    star.addEventListener('click', function () {
        const currentRating = Array.from(stars).filter(s => s.src.includes('fullstar.PNG')).length;
        const newRating = parseInt(this.getAttribute('data-value'));

        if (currentRating === newRating) {
        
            resetStars();
            console.log(`Rating reset to 0`);
        } else {
            
            resetStars(); 
            stars.forEach((s, index) => {
                if (index < newRating) {
                    s.src = 'images/fullstar.PNG'; 
                }
            });
            console.log(`Selected Rating: ${newRating}`);
        }
    });
});

