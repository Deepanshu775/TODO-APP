import React from "react";

function ListOfWork() {
   return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          Buy milk
        </div>
        <div className="col-4">
          23/03/2024
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
   );
}

export default ListOfWork;
