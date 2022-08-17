import React from "react";
import Logo from "../Logo/Logo";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        className="navbar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="ml3">
          <Logo />
        </div>

        <div>
          <p
            className="f4 tc link dim white mr4 mt1 pointer underline-hover-effect"
            onClick={() => onRouteChange("signin")}
          >
            Sign Out
          </p>
        </div>
      </nav>
    );
  } else {
    return (
      <nav
        className="navbar"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div>
          <p
            className="f4 tc link dim white mr4 pointer underline-hover-effect"
            onClick={() => onRouteChange("signin")}
          >
            Sign In
          </p>
        </div>
        <div>
          <p
            className="f4 tc link dim white mr4 pointer underline-hover-effect"
            onClick={() => onRouteChange("register")}
          >
            Register
          </p>
        </div>
      </nav>
    );
  }
};

export default Navigation;
