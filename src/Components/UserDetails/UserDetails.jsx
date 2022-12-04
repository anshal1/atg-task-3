import React from "react";
import { useContext } from "react";
import Context from "../../Context/Context";
import "./UserDetails.css";
const UserDetails = () => {
  const c = useContext(Context);
  const { Userdetails } = c;
  const ImageError = (e) => {
    e.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";
  };
  return (
    <>
      <div className="main_user_details">
        <div className="heading">
          <p>USER DETAILS</p>
        </div>
        {Userdetails.id === undefined ? (
          <h1 id="select_msg">No user is selected</h1>
        ) : (
          <div className="users_details">
            <div className="user_img_username">
              <img src={Userdetails?.avatar} onError={ImageError} alt="" />
              <p>@{Userdetails?.profile?.username}</p>
            </div>
            <div className="bio">
              <p>{Userdetails?.Bio}</p>
            </div>
            <div className="names">
              <label htmlFor="name">
                FullName
                <p>
                  {Userdetails?.profile?.firstName +
                    Userdetails?.profile?.lastName}
                </p>
              </label>
              <label htmlFor="name">
                Job Title
                <p>{Userdetails?.jobTitle}</p>
              </label>
              <label htmlFor="name">
                Email
                <p>{Userdetails?.profile?.email}</p>
              </label>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserDetails;
