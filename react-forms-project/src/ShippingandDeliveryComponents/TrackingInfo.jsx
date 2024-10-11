import { useState, useEffect } from 'react';
import axios from 'axios';

const TrackingInfo = ({ trackingNumber }) => {
  const [trackingData, setTrackingData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrackingInfo = async () => {
      try {
        const response = await axios.get(
          `https://api.fedex.com/track/v1/${trackingNumber}`,
          {
            headers: {
              'Authorization': 'Bearer YOUR_API_KEY',
            },
          }
        );
        setTrackingData(response.data);
      } catch (error) {
        setError('Unable to fetch tracking info');
      }
    };

    if (trackingNumber) {
      fetchTrackingInfo();
    }
  }, [trackingNumber]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {trackingData ? (
        <div>
          <h3>Tracking Details for {trackingNumber}</h3>
          <p>Status: {trackingData.status}</p>
          <p>Expected Delivery: {trackingData.estimatedDeliveryDate}</p>
        </div>
      ) : (
        <p>Loading tracking info...</p>
      )}
    </div>
  );
};

export default TrackingInfo;
