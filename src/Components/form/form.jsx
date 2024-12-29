import React, { useEffect } from 'react';
import './form.css'; // Import the CSS file

const TallyForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
            const iframes = document.querySelectorAll('iframe[data-tally-src]:not([src])');
            iframes.forEach(iframe => {
                iframe.src = iframe.dataset.tallySrc;
            });
        };
        document.body.appendChild(script);

        // Cleanup script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="tally-container">
            <div>
                <h1>REGISTRATION</h1>
                <iframe
                    data-tally-src="https://tally.so/embed/wbNko6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    loading="lazy"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Trial Form"
                ></iframe>
            </div>
        </div>
    );
};

export default TallyForm;
