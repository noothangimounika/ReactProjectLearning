document.getElementById('shipping-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get form values
    const fullName = document.getElementById('full-name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const postalCode = document.getElementById('postal-code').value;
    const country = document.getElementById('country').value;

    // Get selected delivery option
    const deliveryOption = document.querySelector('input[name="delivery-option"]:checked').value;

    // Generate shipping information for confirmation
    const shippingInfo = `
        <strong>Name:</strong> ${fullName}<br>
        <strong>Address:</strong> ${address}, ${city}, ${state}, ${postalCode}, ${country}<br>
        <strong>Delivery Option:</strong> ${deliveryOption}
    `;

    // Show the confirmation section and display the shipping information
    document.getElementById('confirmation').classList.remove('hidden');
    document.getElementById('shipping-info').innerHTML = shippingInfo;
});
