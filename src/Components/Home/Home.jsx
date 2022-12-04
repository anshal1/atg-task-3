import React from "react";
import State from "../../Context/State";
import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="main_home_container">
        <State>
          <User />
          <UserDetails />
        </State>
      </div>
    </>
  );
};

export default Home;
