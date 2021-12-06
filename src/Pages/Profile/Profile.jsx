import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./profile.scss";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/accounts/me/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    })
      .then((data) => {
        console.log(data);
        if (data.ok) {
          setError("");
        }
        return data.json();
      })
      .then((res) => {
        console.log(res);
        setEmail(res.email);
        setName(res.name);
      })
      .catch((err) => setError("Not Authenticated"));
  }, []);
  return (
    <div class="row d-flex justify-content-center all-container">
      <div class="col-md-5 ">
        <div class="card p-3 py-10 card-custom">
          <div class="text-center">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              width="100"
              class="rounded-circle"
            />{" "}
          </div>
          <div class="text-center mt-3">
            {" "}
            <span class="bg-secondary p-1 px-4 rounded text-white">
              Profile
            </span>
            <h5 class="mt-2 mb-0">{name}</h5> <span>{email}</span>
            <div class="px-4 mt-1">
              <p class="fonts">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita cum quam esse fuga, perferendis officiis, quia commodi
                nemo consectetur aspernatur, nisi ut! Id neque error est, non
                nam et ullam?
              </p>
            </div>
            <div class="buttons">
              <Link
                to={{
                  pathname: "update-profile",
                  state: {
                    email,
                    name,
                  },
                }}
                className="btn btn-success"
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
