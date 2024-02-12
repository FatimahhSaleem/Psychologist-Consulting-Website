import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const NotFound = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const authToken = localStorage.getItem("token");
      const decoded = jwtDecode(authToken);
      setUser(decoded.role);
    }
  }, []);

  return (
    <div className="main">
      <div className="text-center p-5 m-4">
        <div className="fw-bold m-5 text-warning" style={{ fontSize: "50px" }}>
          404 Page Not Found
        </div>
        <h2 className="mb-5">I have bad news for you.</h2>
        <h4 className="mb-5 mx-5">
          The page you are looking for doesn't exist or might be removed or is
          temporarily unavailable.
        </h4>
        <h4 className="mb-5 pb-5">
          <Link
            className="button"
            to={
              user === "patient"
                ? "/home"
                : user === "psychologist"
                ? "/psychologist/home"
                : "/"
            }
          >
            Back to Homepage
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default NotFound;
