import './home.css';
import React from 'react';
import Header from '../header';
import Content from '../content';
import Footer from '../footer';

const Home = () => {
    return (
        <main className="home">
            <Header />
            <Content />
            <Footer />
        </main>

    )
}

export default Home
