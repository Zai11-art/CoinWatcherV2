import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
import Dropzone from "react-dropzone";
import { useState } from "react";

// CONFIG REGISTER SCHEMA
const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
});

// CONFIG LOGIN SCHEMA
const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

// INITIAL VALUES
const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  occupation: "",
  picture: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const commonstyles =
  "rounded-t-lg mt-[4rem] md:w-[500px] md:h-[100px] w-[400px] h-[100px]";

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const register = async (values, onSubmitProps) => {
    // this allows us to send form info with image
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    const savedUserResponse = await fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        body: formData,
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
      setPageType("login");
    }
  };

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate("/home");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };
  return (
    <>
      <div
        className={`${commonstyles} homePageCard-filter shadow-lg  absolute z-[2]`}
      ></div>
      <div
        className={`${commonstyles} h-[100px] homePageCard  absolute z-[1]`}
      ></div>
      <div className={`${commonstyles} h-[100px] z-[3] p-6`}>
        {isLogin ? (
          <h1 className="text-[white] text-glow text-4xl font-bold">LOGIN</h1>
        ) : (
          <h1 className="text-[white] text-glow text-4xl font-bold">
            REGISTER
          </h1>
        )}
      </div>
      <div className=" rounded-t-none md:w-[500px] md:h-[650px] w-[400px] h-[650px] bg-[#062c43] p-6 shadow-lg shadow-cyan-500/30 mb-[200px]">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
          validationSchema={isLogin ? loginSchema : registerSchema}
        >
          {({
            values,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            resetForm,
          }) => (
            <form onSubmit={handleSubmit}>
              {isRegister && (
                <>
                  <div className="flex justify-between w-[100%]">
                    <div className="flex w-[45%] flex-col text-[white] text-glow pb-5">
                      <label className="pb-2" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        required
                        className="text-[white] h-8 bg-[#0e1721] "
                        name="firstName"
                        type="text"
                        label="FirstName"
                        value={values.firstName || ""}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        // error={
                        //   Boolean(touched.userName) && Boolean(errors.userName)
                        // }
                        //   helperText={touched.userName && errors.userName}
                      />
                    </div>
                    <div className="flex w-[45%] flex-col text-[white] text-glow pb-5">
                      <label className="pb-2" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        required
                        className="text-[white] h-8 bg-[#0e1721] "
                        name="lastName"
                        type="text"
                        label="LastName"
                        value={values.lastName || ""}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        // error={
                        //   Boolean(touched.userName) && Boolean(errors.userName)
                        // }
                        //   helperText={touched.userName && errors.userName}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col text-[white] text-glow pb-5">
                    <label className="pb-2" htmlFor="location">
                      Location
                    </label>
                    <input
                      required
                      className="text-[white] h-8 bg-[#0e1721] "
                      name="location"
                      type="text"
                      label="Location"
                      value={values.location || ""}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      // error={
                      //   Boolean(touched.userName) && Boolean(errors.userName)
                      // }
                      //   helperText={touched.userName && errors.userName}
                    />
                  </div>
                  <div className="flex flex-col text-[white] text-glow pb-5">
                    <label className="pb-2" htmlFor="occupation">
                      Occupation
                    </label>
                    <input
                      required
                      className="text-[white] h-8 bg-[#0e1721] "
                      name="occupation"
                      type="text"
                      label="Occupation"
                      value={values.occupation || ""}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      // error={
                      //   Boolean(touched.userName) && Boolean(errors.userName)
                      // }
                      //   helperText={touched.userName && errors.userName}
                    />
                  </div>
                  <div className="flex flex-col text-[white] text-glow pb-5">
                    <label className="pb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      required
                      className="text-[white] h-8 bg-[#0e1721] "
                      name="email"
                      type="text"
                      label="Email"
                      value={values.email || ""}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      // error={Boolean(touched.email) && Boolean(errors.email)}
                      //   helperText={touched.email && errors.email}
                    />
                  </div>
                  <div className="flex flex-col text-[white] text-glow pb-5">
                    <label className="pb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      required
                      className="text-[white] h-8 bg-[#0e1721] "
                      name="password"
                      type="password"
                      label="Password"
                      value={values.password || ""}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      // error={
                      //   Boolean(touched.password) && Boolean(errors.password)
                      // }
                      //   helperText={touched.password && errors.password}
                    />
                  </div>
                  <div>
                    <Dropzone
                      acceptedFiles=".jpg,.jpeg,.png"
                      multiple={false}
                      onDrop={(acceptedFiles) =>
                        setFieldValue("picture", acceptedFiles[0])
                      }
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          {!values.picture ? (
                            <div className="flex flex-row items-center justify-center h-[5rem] border-[#9ccddc] border-dashed border-[1px]">
                              <div className="flex flex-col text-center">
                                <p className="text-[white] cursor-pointer pb-1 font-bold">
                                  Add User Picture Here
                                </p>
                                <span className="text-[white]">
                                  {!values.picture?.name
                                    ? "Choose photo (Required)"
                                    : values.picture.name}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-row items-center justify-around h-[5rem] border-[#9ccddc] border-dashed border-[1px]">
                              <div className="flex flex-row justify-center items-center">
                                <span className="text-[white]">
                                  {!values.picture?.name
                                    ? "No photo"
                                    : values.picture.name}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </Dropzone>
                  </div>
                </>
              )}

              {!isRegister && (
                <>
                  <div className="flex flex-col text-[white] text-glow pb-5">
                    <label className="pb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      required
                      className="text-[white] h-8 bg-[#0e1721] "
                      name="email"
                      type="email"
                      label="Email"
                      value={values.email || ""}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      // error={Boolean(touched.email) && Boolean(errors.email)}
                      //   helperText={touched.email && errors.email}
                    />
                  </div>

                  <div className="flex flex-col text-[white] text-glow pb-5">
                    <label className="pb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      required
                      className="text-[white] h-8 bg-[#0e1721] "
                      name="password"
                      type="password"
                      label="Password"
                      value={values.password || ""}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      // error={
                      //   Boolean(touched.password) && Boolean(errors.password)
                      // }
                      //   helperText={touched.password && errors.password}
                    />
                  </div>
                </>
              )}
              <div className="mt-5">
                <button
                  type="submit"
                  className=" text-white border-[2px] rounded-md px-2 md:py-1 py- w-full
                border-[#9ccddc] md:bg-[#054569] bg-[#062c43] font-semibold hover:bg-[#9ccddc] md:mt-0 mt-2 
                hover:text-[white] duration-200 ease-in-out hover:scale-[1.02]"
                >
                  {isLogin ? "LOGIN" : "REGISTER"}
                </button>
              </div>
              <div
                onClick={() => {
                  setPageType(isLogin ? "register" : "login");
                  resetForm();
                }}
                className="flex flex-row justify-center cursor-pointer text-[#ced7e0] text-sm mt-5"
              >
                {isLogin
                  ? "Don't have an account? Sign Up here."
                  : "Already have an account? Login here."}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Form;

// HEX CODES:
// #051925
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0
