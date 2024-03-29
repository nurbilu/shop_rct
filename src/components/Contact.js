import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div>
            <h2>Contact Us</h2>
            <p>Name: John Doe</p>
            <p>Address: 1234 Maple Street, Anytown, AN 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: johndoe@example.com</p>
            <div><Link to="/settle" className="btn btn-outline-light">Settle</Link></div>
        </div>
    );
};

export default ContactUs;