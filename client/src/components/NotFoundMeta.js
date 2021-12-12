import React from 'react';
import {  Link } from "react-router-dom";
import Logo from '../assets/clipart1667490.png';

const NotFoundMeta = () => {
  return (
    <div class="container">
        <div class="row mt-5">
            <div class="col-5">
                <h1>Waiting for MetaMask...</h1>
                <h4>If you don't have metamask install</h4>
                <Link to="/home" class="btn btn-primary btn-lg mt-5 mr-2">Go home</Link>
                <a href="https://metamask.io/" class="btn btn-primary btn-lg mt-5">Download Metamask</a>
            </div>
            <div class="col-7">
                <img src={Logo} alt="Responsive" class="img-fluid" height='400'/>
            </div>
        </div>
    </div>
  );
}
export default NotFoundMeta;