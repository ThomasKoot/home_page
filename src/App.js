import React, { useEffect } from 'react';
import ScrollBox from './components/ScrollBox'
import Header from './components/Header'
import Onderschrift from './components/Onderschrift'
import PortFolio from './components/PortFolio'
import Credentials from './components/Credentials.js'
import About from './components/About'
import Footer from './components/Footer'
import { credentials } from './assets/data'

import './App.css';
import './stylesheets/portfolio.css';
import './stylesheets/dropdown_menu.css'
import './stylesheets/credentials.css';
import './stylesheets/footer.css';
import './stylesheets/scrollbox.css';

function App() {

  useEffect(() => {
    document.title = "thomascode.nl"
  }, [])

  const data = [
    {name: "javascript", value: "75%"},
    {name: "react", value: "50%"},
    {name: "aws", value: "40%"},
    {name: "pizzabakken", value: "80%"},
    {name: "koken", value: "70%"},
    {name: "fietsen", value: "30%"},
  ]

  return (
    <div className="App">
        <Header />
        <Onderschrift />
        <ScrollBox data={data}/>
        <PortFolio />
        <About />
        <Credentials credentials={credentials} />
       
        <Footer />
        

    </div>
  );
}

export default App;
