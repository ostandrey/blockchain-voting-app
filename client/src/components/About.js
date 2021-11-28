import React from 'react';
import {  Link } from "react-router-dom";
import Vote from '../assets/4427.jpg'

const About = () => {
  return (
    <div class='container'>
      <div class='my-5'>
        <h1>How does BlockVote works?</h1>
        <h6>by&nbsp;
          <Link to="/home">Election</Link>
        </h6>
        <hr/>
        <h3>Posted on October 19, 2021 at 12:00 PM</h3>
        <hr/>
        <img src={Vote} alt="Vote image" class="img-fluid"/>
        <hr/>
        <h2>Standing in the queue and waiting for your turn to cast vote is a part of a history now.</h2>
        <p>
          Election Co proposes a new system of voting where everything is transparent 
          and no question of tampering the voting machine as it doesn't exists in first place.
        </p>
        <p>
          BVoting is the upcoming way of casting vote where all the votes will be stored in the Blockchain, 
          which makes the system tamper proof and fully transparent.
        </p>
        <div class="alert alert-secondary" role="alert">
          <span>This is still under various trials! Please expect few bugs.</span>
        </div>
        <h3><strong>How to use?</strong></h3>
        <ol>
          <li>Install <a href='https://metamask.io/' alt='MetaMask'>MetaMask</a> Browser Extension.</li>
          <li>Make sure that the Ethereum Account which you've been assigned is imported into MetaMask.</li>
          <li>Visit the <Link to="/vote">Cast Vote Page</Link> and cast your vote</li>
        </ol>
        <p>
          Regards,
          Election Co
        </p>
      </div>
    </div>
  );
}
export default About;