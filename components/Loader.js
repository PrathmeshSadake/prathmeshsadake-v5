import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000f26",
      }}
    >
      <HashLoader color="#64ffda" loading={true} size={150} />
    </div>
  );
};

export default Loader;
