import React from "react";

const Account = ({account}) => {
  return (
    <div class="container">
        <div class="card mb-3"  style={{width: '70%'}}>
            <div class="row g-0">
              <div class="col-md-4">
                {/* <img src="..." class="img-fluid rounded-start" alt="..." /> */}
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Vote card</h5>
                  <p class="card-text">
                    Addres: 
                    <span className='font-weight-bold'>
                        {''} {account}
                    </span>
                  </p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}
export default Account;