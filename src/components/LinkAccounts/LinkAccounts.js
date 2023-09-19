import React from "react";

const LinkAccounts = () => {
  return (
    <div className="container m-auto p-0">
      <div className="row join-container p-bg-grey p-3 text-center m-auto mt-5">
        <div className="col-8 col-sm-8 align-middle text-start m-auto pe-0">
          Vincula els teus <br /> comptes per la Hack!
        </div>
        <div className="col-4 col-sm-4 m-auto px-0">
          <i className="bi bi-github fa-2x me-3"></i>
          <i className="bi bi-linkedin fa-2x me-3"></i>
        </div>
      </div>
    </div>
  );
};

export default LinkAccounts;
