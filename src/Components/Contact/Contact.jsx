import React from 'react';
import './Contact.css';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "2faf2a7b-3cca-427a-8cbd-7a05e498ddf2");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    
    return (
        <div> 
        <div className='contact'>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                    <label>Write your messages here</label>
                    <textarea name="message" rows="6" placeholder='enter your message' required></textarea>
                    <button type='submit' className='btn1 dark-btn1'>Submit now </button>
                </form>
                <span>{result}</span>
            </div>

        </div>
        </div>
    )
}

export default Contact;
