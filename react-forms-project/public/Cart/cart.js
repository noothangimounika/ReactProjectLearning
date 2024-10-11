// Track Add to Cart clicks
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
      const productId = event.target.getAttribute('id').split('-')[3];
      console.log(`Product ${productId} added to cart`);
      // Here you would send the data to Google Analytics or another service
      // ga('send', 'event', 'Cart', 'Add', productId);
    });
  });
  
  // Track Checkout clicks
  document.getElementById('checkout-btn').addEventListener('click', () => {
    console.log('Checkout started');
    // ga('send', 'event', 'Checkout', 'Start');
  });
  