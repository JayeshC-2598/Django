import React from "react";
import Header from "../../components/Header";
import Article from "../../containers/Article";
import AboutUs from "../../containers/AboutUs";
import ContactForm from "../../containers/ContactForm";
import Footer from "../../containers/Footer";

function Home() {
    return (
        <>
            <Header />
            <Article />
            <AboutUs />
            <ContactForm />
            <Footer />
        </>
    );
}

export default Home;
