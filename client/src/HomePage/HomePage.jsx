import React from 'react';
import MainSlider from './Slider/MainSlider';
import Card from './Card/Card';
import Search from '../SearchForm/Search';
import Navbar from "../components/Navbar";
import Footer from '../Footer/Footer';


const HomePage = () => {
  return (
    <>
    <Navbar />
    <Search />
    <MainSlider />
    <Card />
    <Footer />
    </>
  )
}

export default HomePage

