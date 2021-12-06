import React, { useState } from "react";
import { Form, Formik } from "formik";
import { TextField } from "../../Components/TextField/TextField";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";

const UpdateProfile = (props) => {
  console.log(props);
  const [error, setError] = useState("");
  const location = useLocation();
  const validate = Yup.object({
    name: Yup.string()
      .min(4, "Name must be at least 4 character")
      .required("Name is Required"),
    email: Yup.string()
      .min(6, "Email must be at least 6 character")
      .required("Email is Required")
      .email("Email is invalid"),
  });
  return (
    <Formik
      initialValues={{
        email: location.state.email,
        name: location.state.name,
      }}
      validationSchema={validate}
      onSubmit={async (values) => {
        await fetch("/accounts/me/", {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Token " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.err) setError(data.err);
          })
          .catch((err) => console.log(err));
      }}
    >
      {(formik) => (
        <div className="login-page">
          <div className="form">
            {error !== "" && <h6 className="error-top">* {error}</h6>}
            <Form className="register-form">
              <TextField type="text" placeholder="Email Address" name="email" />
              <TextField type="text" placeholder="Name" name="name" />
              <button>Submit</button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default UpdateProfile;
