import React, { useState, useEffect } from 'react';

const ShippingCalculator = () => {
  const [location, setLocation] = useState(''); // User's location
  const [shippingCost, setShippingCost] = useState(null);

  useEffect(() => {
    if (location) {
      // Trigger API call when location changes
      fetchShippingRates(location);
    }
  }, [location]);

  const fetchShippingRates = async (userLocation) => {
    // Make API call here, setShippingCost with the response
  };

  return (
    <div>
      <label>Enter your location:</label>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      {shippingCost && <p>Estimated Shipping Cost: ${shippingCost}</p>}
    </div>
  );
};

export default ShippingCalculator;
