import React from 'react';

/* Components */
import Header from '../../_components/Header';
import Nav from '../../_components/Nav';
import Carousel from '../../_components/Carousel';
import Presentation from '../../_components/Presentation';
import Acting from '../../_components/Acting';
import Consult from '../../_components/Consult';
import Footer from '../../_components/Footer';
import Modal from '../../_components/Modal';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <main className="main">
        <Carousel />
        <Presentation />
        <Acting />
        <Consult />
      </main>
      <Footer />
      <Modal />
    </>
  );
}

export default App;
