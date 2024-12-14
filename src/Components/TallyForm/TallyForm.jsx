import React from 'react';
import './TallyForm.css'; // Optional for additional styling if needed

const TallyForm = () => {
  return (
    <div className="tally-container">
      <iframe
        data-tally-src="https://tally.so/r/nGoZYj?transparentBackground=1"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Welcome to Navigate 2025!"
        className="tally-iframe"
      ></iframe>
    </div>
  );
};

export default TallyForm;
