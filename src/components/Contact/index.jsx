import { useState } from "react";
import { SelectionCont } from "../SelectionCont";
import './Contact.css'

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone:'',
        city: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <div id="contac-content">
            <SelectionCont>
                <img src="https://www.acozzuol.com.ar/eng/img/contacto_tit.png" alt="" />
                <p>info@acozzuol.com.ar</p>
            </SelectionCont>
            <div id="form-contact">
                <form onSubmit={handleSubmit}>
                    <div className="form-seccion">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-seccion">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div id="phone-city" className="form-seccion">
                        <div className="form-seccion">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                type="text" 
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                />
                        </div>
                        <div className="form-seccion">
                            <label htmlFor="city">City:</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                    <div className="form-seccion">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <button id="form-button" type="submit">Send</button>
                </form>
            </div>

        </div>
    )
}