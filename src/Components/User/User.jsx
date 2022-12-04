import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Context from "../../Context/Context";
import Loader from "../Loader/Loader";
import "./User.css";
const User = () => {
  const c = useContext(Context);
  const { setUserDetails, Userdetails } = c;
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  // user fetching function
  const FetchUser = async () => {
    try {
      let url = "https://602e7c2c4410730017c50b9d.mockapi.io/users";
      let data = await fetch(url);
      let res = await data.json();
      if (typeof res !== "string" && res.length >= 1) {
        setloading(false);
        setusers(res);
        seterror(null);
      } else {
        seterror(res);
        setloading(false);
      }
    } catch (error) {
      if (error) {
        seterror(error);
        setloading(false);
      }
    }
  };
  useEffect(() => {
    FetchUser();
  }, []);
  // Function to show user details
  const Setusers = (user) => {
    if (!user.id) return;
    setUserDetails(user);
  };
  // Showing no Image available image when there is an error while fetching the image
  const ImageError = (e) => {
    e.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";
  };

  return (
    <>
      <div className="main_user_container">
        <div className="heading">
          <p>Users Lists</p>
        </div>
        {/* Loading here */}
        {loading ? (
          <Loader />
        ) : (
          // Loading ended here
          <div className="userBox">
            {/* Showing error */}
            {error ? (
              <h2 className="error">Something Went Wrong</h2>
            ) : (
              // Showing users if there is no error
              <div className="userbox">
                {users.length >= 1 ? (
                  // Showing user if the length of users array is greater than or equal to 1
                  users?.map((user) => {
                    return (
                      <div
                        className={`user_conatiner ${
                          Userdetails.id === user.id ? "active" : ""
                        }`}
                        key={user.id}
                        onClick={() => {
                          Setusers(user);
                        }}
                        style={{ "--order": user.id }}
                      >
                        <div className="user_holder">
                          <img src={user.avatar} onError={ImageError} alt="" />
                          <div className="name">
                            <p>
                              {user.profile.firstName} {user.profile.lastName}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  // Showing this message if user array length is equal to 0
                  <h2 className="error">No users found</h2>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default User;
