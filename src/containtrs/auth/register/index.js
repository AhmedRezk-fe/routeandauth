import react, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import getFirebaseToken from "../../../firebase/action";
import Redirect from "react-router-dom"
import { authLogo } from "../../../images/index";

import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const { register, errors, handleSubmit } = useForm();
  const [countrys, setCountrys] = useState();
  const [formData, setFormData] = useState({
    terms: 1,
    device_token:
      "dofEy2I09iuVYI2INjYDsN:APA91bEa1iAhOPHLp6U8iRkQQyme5wyL7fR2ShwImbOW9IEo0uV6pR4heqq0rDdzseoVvF1Caye_fFULMsFpGCpjYz0_MgAWokCg49oIitcN5BWBAhp0Vkk4zZUitoF2c9T4D3BZNUKU",
    phone_country_code: "20",
  });


  //   git city
  useEffect(() => {
    axios
      .get("https://handyapp.net/ar/api/v1/marketplace/countries-cities")
      .then((res) => {
        let countrysItem = res.data;
        setCountrys(countrysItem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = (data) => {
    console.log("data Aurh >>>>",{
      ...formData,
      ...data,
    });
    axios
      .post("https://handyapp.net/en/api/v1/auth/register", {
        ...formData,
        ...data,
      })
      .then((res) => {
        console.log(res.data);
        // <Redirect to="/dff" />
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-7 col-xs-12">
            <div className="register__logo">
              <div className="img__logo">
                <img src={authLogo} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-5 col-xs-12">
            <div className="authForm">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="title__form">
                  <h2>welcomet</h2>
                  <p>welcomet</p>
                </div>

                <div className="group--input">
                  <div className="form-group">
                    <label htmlFor="fName">First Name *</label>
                    <input
                      name="name"
                      ref={register({ required: true })}
                      type="text"
                    />
                    {errors.name && "First name is required"}
                  </div>

                  <div className="form-group">
                    <label htmlFor="fName">Last Name</label>
                    <input
                      name="last_name"
                      type="text"
                      ref={register({ required: true })}
                    />
                    {errors.last_name && "last name is required"}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">email</label>
                  <input
                    name="email"
                    type="email"
                    ref={register({ required: true })}
                  />
                  {errors.email && " email is required"}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    ref={register({ required: true })}
                    type="password"
                  />
                  {errors.password && " password is required"}
                </div>
                <div className="form-group">
                  <label htmlFor="cPassword">Password</label>
                  <input
                    name="password_confirmation"
                    type="password"
                    ref={register({ required: true })}
                  />
                  {errors.password_confirmation && " password is required"}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone number *</label>
                  <input
                    name="phone_number"
                    type="tel"
                    ref={register({ required: true })}
                  />
                  {errors.phone_number && " phone number is required"}
                </div>
                <div className="group-select">
                  <div className="form-group-select">
                    <select>
                      {countrys &&
                        countrys.map((item) => {
                          return (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="form-group-select">
                    <select name="city_id" ref={register({ required: true })}>
                      {countrys &&
                        countrys.map((item) => {
                          return item.cities.map((itemcity) => {
                            return (
                              <option key={itemcity.id} value={+itemcity.id}>
                                {itemcity.name}
                              </option>
                            );
                          });
                        })}
                    </select>
                    {errors.city_id && " city  is required"}
                  </div>
                </div>

                <div className="btn__submit">
                  <button type="submit">Create</button>
                </div>
                <div className="label">
                  register.ifyou
                  <a href="/login">Sign in here</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
