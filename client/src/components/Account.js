import React from "react";

const Account = ({account}) => {
  return (
    <div class="container">
      <div class="card mt-5">
        <div class="card-header">
          Info
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            Addres: 
            <span className='font-weight-bold'>
                {''} {account}
            </span>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
export default Account;