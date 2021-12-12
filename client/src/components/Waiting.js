import React from 'react';
import loading from '../assets/loading.png';


const Waiting = () => {
  return (
    <div class="container">
      <div class="row mt-5">
          <div class="col-6">
              <h1>Loading your choice...</h1>
          </div>
          <div class="col-6">
              <img src={loading} alt="Waiting fox" class="img-fluid" height='400'/>
          </div>
      </div>
    </div>
  );
}
export default Waiting;