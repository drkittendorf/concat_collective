import React from "react";

const loading =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

function Loading() {
  return <div className="spinner">
    <img src={loading} alt="Loading" />
  </div>
};

export default Loading;
