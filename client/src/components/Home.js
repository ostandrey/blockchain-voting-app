import React from 'react';
import {  Link } from "react-router-dom";
import Logo from '../assets/6386.jpg';

const Home = () => {
  return (
    <div class="container">
        <div class="row mt-5">
            <div class="col-4">
                <h1>Hello, Voter!</h1>
                <h4>Welcome to new age of voting.</h4>
                <Link to="/about" class="btn btn-primary btn-lg mt-5">Learn more</Link>
            </div>
            <div class="col-8">
                <img src={Logo} alt="Responsive" class="img-fluid" height='400'/>
            </div>
        </div>
    </div>
  );
}
export default Home;