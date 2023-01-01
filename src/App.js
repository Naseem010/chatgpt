import React from 'react';
import {Brand,CTA,Navbar} from "./components";
import { Header,Footer,Blog,Features,Possibility,WHATGPT3 } from './containers';
import "./App.css";
function App() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
        <Navbar />
        <Header />
    </div>
    <Brand />
    <WHATGPT3 /> 
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
    </div>
  )
}
export default App
