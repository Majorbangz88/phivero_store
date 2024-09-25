import React from 'react';
import Hero from "../components/hero.jsx";
import LatestCollection from "../components/latestCollection.jsx";
import BestSeller from "../components/bestSeller.jsx";
import OurPolicy from "../components/ourPolicy.jsx";
import NewsLetterBox from "../components/newsLetterBox.jsx";
import SearchBar from "../components/searchBar.jsx";

function Home() {
    return (
        <div>
            <Hero />
            <LatestCollection />
            <BestSeller />
            <OurPolicy />
            <NewsLetterBox />
        </div>
    );
}

export default Home;