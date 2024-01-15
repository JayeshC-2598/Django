// ContactForm.jsx
import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="w-full py-20 bg-slate-200">
            <h2 className="text-4xl uppercase text-center font-medium p-2">
                Contact Us
            </h2>
            <div className="border-b border-black border-4 rounded-lg mx-auto w-24 mb-6"></div>
            <form
                className="max-w-4xl mx-auto px-20 py-16"
                onSubmit={handleSubmit}
            >
                <div className="mb-6">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-black"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-black"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-black"
                    >
                        Phone Number
                    </label>
                    <input
                        type="phone"
                        id="phone"
                        name="phone"
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-black"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="flex justify-center align-center">
                    <button
                        type="submit"
                        className="bg-slate-800 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
