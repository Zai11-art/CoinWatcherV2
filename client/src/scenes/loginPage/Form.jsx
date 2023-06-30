import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
import Dropzone from "react-dropzone";
import { useState } from "react";
<<<<<<< HEAD
=======
import { useSelector } from "react-redux";
>>>>>>> origin/master

// CONFIG REGISTER SCHEMA
const registerSchema = yup.object().shape({
  userName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  bio: yup.string().required("required"),
  password: yup.string().required("required"),
  picture: yup.string().required("required"),
});

// CONFIG LOGIN SCHEMA
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("invalid email")
    .required("required")
    .matches(/[a-zA-Z]/, "Incorrect password or email"),
  password: yup
    .string()
    .required("required")
    .matches(/[a-zA-Z]/, "Incorrect password or email"),
});

// INITIAL VALUES
const initialValuesRegister = {
  userName: "",
  email: "",
  password: "",
  picture: "",
  bio: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const commonstyles =
  "rounded-t-lg mt-[4rem] md:w-[500px] md:h-[100px] w-[400px] h-[100px]";

const Form = () => {
<<<<<<< HEAD
=======
  const mode = useSelector((state) => state.mode);
>>>>>>> origin/master
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  // log in status
  const [message, setMessage] = useState("");
  // register status
  const [registerMessage, setregisterMessage] = useState("");

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
      setregisterMessage("Register Successful! Redirecting to Login");
      setTimeout(() => {
        setPageType("login");
        setregisterMessage("");
        setMessage("");
      }, 2000);
    } else {
      setregisterMessage("Please fill up all fields.");
    }
  };

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    console.log(loggedInResponse, loggedIn);
    onSubmitProps.resetForm();
    if (loggedIn.msg != "User does not exist. ") {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      setTimeout(() => navigate("/community"), 2000);
      setMessage("Welcome!");
    } else {
      setMessage("Incorrect email or password. Please try again.");
      navigate("/login");
    }
  };

  // const resultMessage = login

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };
  return (
    <>
      <div
<<<<<<< HEAD
        className={`${commonstyles} homePageCard-filter absolute  z-[2] shadow-lg`}
      ></div>
      <div
        className={`${commonstyles} homePageCard absolute  z-[1] h-[100px]`}
      ></div>
      <div className={`${commonstyles} z-[3] h-[100px] p-6`}>
        {isLogin ? (
          <h1 className="text-glow text-4xl font-bold text-[white]">LOGIN</h1>
        ) : (
          <h1 className="text-glow text-4xl font-bold text-[white]">
            REGISTER
          </h1>
=======
        className={`${commonstyles} ${
          mode === "light"
            ? "newscard-filter-light opacity-[95%] "
            : "newscard-filter text-white"
        }  absolute  z-[2] shadow-lg`}
      ></div>
      <div
        className={`${commonstyles}  homePageCard absolute  z-[1] h-[100px] `}
      ></div>
      <div
        className={`${commonstyles} ${
          mode === "light" ? "text-glow-light text-[#1b4169]" : "text-white"
        } z-[3] h-[100px] p-6`}
      >
        {isLogin ? (
          <h1 className=" text-4xl font-bold">LOGIN</h1>
        ) : (
          <h1 className=" text-4xl font-bold ">REGISTER</h1>
>>>>>>> origin/master
        )}
      </div>

      {isLogin &&
        (message === "Welcome!" ? (
<<<<<<< HEAD
          <div className="text-md w-[400px] bg-[#000f1b] py-3 text-center font-semibold text-green-300 transition-all ease-in-out md:w-[500px]">
            {message}
          </div>
        ) : (
          <div className="text-md w-[400px] bg-[#000f1b] py-3 text-center font-semibold text-red-500 transition-all ease-in-out md:w-[500px]">
=======
          <div
            className={`text-md w-[400px] ${
              mode === "light" ? "bg-slate-200" : "bg-[#000f1b]"
            } py-3 text-center font-semibold text-green-300 transition-all ease-in-out md:w-[500px]`}
          >
            {message}
          </div>
        ) : (
          <div
            className={`text-md w-[400px] ${
              mode === "light" ? "bg-slate-200" : "bg-[#000f1b]"
            } py-3 text-center font-semibold text-red-500 transition-all ease-in-out md:w-[500px]`}
          >
>>>>>>> origin/master
            {message}
          </div>
        ))}

      {isRegister &&
        (registerMessage === "Register Successful! Redirecting to Login" &&
        registerMessage?.length ? (
<<<<<<< HEAD
          <div className="text-md w-[400px] bg-[#000f1b] py-3 text-center font-semibold text-green-300 transition-all ease-in-out md:w-[500px]">
            {registerMessage}
          </div>
        ) : (
          <div className="text-md w-[400px] bg-[#000f1b] py-3 text-center font-semibold text-red-500 transition-all ease-in-out md:w-[500px]">
=======
          <div
            className={`text-md w-[400px] ${
              mode === "light" ? "bg-slate-200" : "bg-[#000f1b]"
            } py-3 text-center font-semibold text-green-300 transition-all ease-in-out md:w-[500px]`}
          >
            {registerMessage}
          </div>
        ) : (
          <div
            className={`text-md w-[400px] ${
              mode === "light" ? "bg-slate-200" : "bg-[#000f1b]"
            } py-3 text-center font-semibold text-red-500 transition-all ease-in-out md:w-[500px]`}
          >
>>>>>>> origin/master
            {registerMessage}
          </div>
        ))}

<<<<<<< HEAD
      <div className=" mb-[200px] h-[650px] w-[400px] rounded-t-none bg-[#062c43] p-6 shadow-lg shadow-cyan-500/30 md:h-[650px] md:w-[500px]">
=======
      <div
        className={` mb-[200px] h-[650px] w-[400px] rounded-t-none ${
          mode === "light"
            ? "newscard-filter-light opacity-[80%]"
            : "newscard-filter"
        } p-6 shadow-lg shadow-cyan-500/30 md:h-[650px] md:w-[500px]`}
      >
>>>>>>> origin/master
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
            errors,
            touched,
          }) => (
            <form onSubmit={handleSubmit}>
              {isRegister && (
                <>
                  <div className="flex w-[100%] justify-between">
<<<<<<< HEAD
                    <div className=" flex w-[100%] flex-col pb-5 text-[white]">
=======
                    <div
                      className={` flex w-[100%] flex-col pb-5 ${
                        mode === "light"
                          ? "font-semibold text-black"
                          : "text-[white]"
                      } `}
                    >
>>>>>>> origin/master
                      <div className="flex flex-row justify-between">
                        <label className="text-glow pb-2" htmlFor="userName">
                          Username
                        </label>
                        {/* error handling */}
                        {errors.userName && touched.userName ? (
                          <div className="text-red-500 transition-all ease-in-out">
                            {errors.userName}
                          </div>
                        ) : null}
                      </div>

                      <input
                        required
<<<<<<< HEAD
                        className="h-8 bg-[#0e1721] text-[white] "
=======
                        className={`h-8 ${
                          mode === "light" ? "bg-slate-200/90" : "bg-[#02121c]"
                        } `}
>>>>>>> origin/master
                        name="userName"
                        type="text"
                        label="UserName"
                        value={values.userName || ""}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

<<<<<<< HEAD
                  <div className=" flex flex-col pb-5 text-[white]">
=======
                  <div
                    className={` flex w-[100%] flex-col pb-5 ${
                      mode === "light"
                        ? "font-semibold text-black"
                        : "text-[white]"
                    } `}
                  >
>>>>>>> origin/master
                    <div className="flex flex-row justify-between">
                      <label className="text-glow pb-2" htmlFor="email">
                        Email
                      </label>
                      {/* error handling */}
                      {errors.email && touched.email ? (
                        <div className="text-red-500 transition-all ease-in-out">
                          {errors.email}
                        </div>
                      ) : null}
                    </div>
                    <input
                      required
<<<<<<< HEAD
                      className="h-8 bg-[#0e1721] text-[white] "
=======
                      className={`h-8 ${
                        mode === "light" ? "bg-slate-200/90" : "bg-[#02121c]"
                      } `}
>>>>>>> origin/master
                      name="email"
                      type="text"
                      label="Email"
                      value={values.email || ""}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
<<<<<<< HEAD
                  <div className=" flex flex-col pb-5 text-[white]">
=======
                  <div
                    className={` flex w-[100%] flex-col pb-5 ${
                      mode === "light"
                        ? "font-semibold text-black"
                        : "text-[white]"
                    } `}
                  >
>>>>>>> origin/master
                    <div className="flex flex-row justify-between">
                      <label className="text-glow pb-2" htmlFor="bio">
                        Bio
                      </label>
                      {/* error handling */}
                      {errors.bio && touched.bio ? (
                        <div className="text-red-500 transition-all ease-in-out">
                          {errors.bio}
                        </div>
                      ) : null}
                    </div>
                    <input
                      required
<<<<<<< HEAD
                      className="h-8 bg-[#0e1721] text-[white] "
=======
                      className={`h-8 ${
                        mode === "light" ? "bg-slate-200/90" : "bg-[#02121c]"
                      } `}
>>>>>>> origin/master
                      name="bio"
                      type="text"
                      label="Bio"
                      value={values.bio || ""}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
<<<<<<< HEAD
                  <div className=" flex flex-col pb-5 text-[white]">
=======
                  <div
                    className={` flex w-[100%] flex-col pb-5 ${
                      mode === "light"
                        ? "font-semibold text-black"
                        : "text-[white]"
                    } `}
                  >
>>>>>>> origin/master
                    <div className="flex flex-row justify-between">
                      <label className="text-glow pb-2" htmlFor="password">
                        Password
                      </label>
                      {/* error handling */}
                      {errors.password && touched.password ? (
                        <div className="text-red-500 transition-all ease-in-out">
                          {errors.password}
                        </div>
                      ) : null}
                    </div>
                    <input
                      required
<<<<<<< HEAD
                      className="h-8 bg-[#0e1721] text-[white] "
=======
                      className={`h-8 ${
                        mode === "light" ? "bg-slate-200/90" : "bg-[#02121c]"
                      } `}
>>>>>>> origin/master
                      name="password"
                      type="password"
                      label="Password"
                      value={values.password || ""}
                      onBlur={handleBlur}
                      onChange={handleChange}
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
<<<<<<< HEAD
                            <div className="flex h-[5rem] flex-row items-center justify-center border-[1px] border-dashed border-[#9ccddc]">
                              <div className="flex flex-col text-center">
                                <p className="cursor-pointer pb-1 font-bold text-[white]">
                                  Add User Picture Here
                                </p>
                                <span className="text-[white]">
=======
                            <div
                              className={`flex h-[5rem] flex-row items-center justify-center border-[1px] border-dashed ${
                                mode === "light"
                                  ? "border-blue-900 text-blue-900"
                                  : "border-[#9ccddc] text-white"
                              } `}
                            >
                              <div className="flex flex-col text-center">
                                <p className="cursor-pointer pb-1 font-bold ">
                                  Add User Picture Here
                                </p>
                                <span className="">
>>>>>>> origin/master
                                  {!values.picture?.name
                                    ? "Choose photo (Required)"
                                    : values.picture.name}
                                </span>
                              </div>
                            </div>
                          ) : (
<<<<<<< HEAD
                            <div className="flex h-[5rem] flex-row items-center justify-around border-[1px] border-dashed border-[#9ccddc]">
                              <div className="flex flex-row items-center justify-center">
                                <span className="text-[white]">
=======
                            <div
                              className={`flex h-[5rem] flex-row items-center justify-around border-[1px] border-dashed ${
                                mode === "light"
                                  ? "border-blue-900 text-blue-900"
                                  : "border-[#9ccddc] text-white"
                              }`}
                            >
                              <div className="flex flex-row items-center justify-center">
                                <span className="">
>>>>>>> origin/master
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
<<<<<<< HEAD
                  <div className=" flex flex-col pb-5 text-[white]">
=======
                  <div
                    className={` flex w-[100%] flex-col pb-5 ${
                      mode === "light"
                        ? "font-semibold text-black"
                        : "text-[white]"
                    } `}
                  >
>>>>>>> origin/master
                    <div className="flex flex-row justify-between">
                      <label className="text-glow pb-2" htmlFor="email">
                        Email
                      </label>
                      {/* error handling */}
                      {errors.email && touched.email ? (
                        <div className="text-red-500 transition-all ease-in-out">
                          {errors.email}
                        </div>
                      ) : null}
                    </div>

                    <input
                      required
<<<<<<< HEAD
                      className="h-8 bg-[#0e1721] text-[white] "
=======
                      className={`h-8 ${
                        mode === "light"
                          ? "bg-slate-200/90 text-slate-900"
                          : "bg-[#02121c] text-white"
                      } `}
>>>>>>> origin/master
                      name="email"
                      type="email"
                      label="Email"
                      value={values.email || ""}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>

<<<<<<< HEAD
                  <div className="flex flex-col pb-5 text-[white]">
=======
                  <div
                    className={` flex w-[100%] flex-col pb-5 ${
                      mode === "light"
                        ? "font-semibold text-black"
                        : "text-[white]"
                    } `}
                  >
>>>>>>> origin/master
                    <div className="flex flex-row justify-between">
                      <label className="text-glow pb-2 " htmlFor="password">
                        Password
                      </label>
                      {/* error handling */}
                      {errors.password && touched.password ? (
                        <div className="text-red-500">{errors.password}</div>
                      ) : null}
                    </div>
                    <input
                      required
<<<<<<< HEAD
                      className="h-8 bg-[#0e1721] text-[#928c8c] "
=======
                      className={`h-8 ${
                        mode === "light"
                          ? "bg-slate-200/90 text-slate-900"
                          : "bg-[#02121c] text-white"
                      } `}
>>>>>>> origin/master
                      name="password"
                      type="password"
                      label="Password"
                      value={values.password || ""}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
              <div className="mt-5">
                <button
                  id="hehe"
                  type="submit"
                  className=" py- hehe mt-2 w-full rounded-md border-[2px] border-[#9ccddc]
                bg-[#062c43] px-2 font-semibold text-white duration-200 ease-in-out hover:scale-[1.02] 
                hover:bg-[#9ccddc] hover:text-[white] md:mt-0 md:bg-[#054569] md:py-1"
                >
                  {isLogin ? "LOGIN" : "REGISTER"}
                </button>
              </div>
              <div
                onClick={() => {
                  setPageType(isLogin ? "register" : "login");
                  resetForm();
                }}
<<<<<<< HEAD
                className="mt-5 flex cursor-pointer flex-row justify-center text-sm text-[#ced7e0]"
=======
                className={`mt-5 flex cursor-pointer flex-row justify-center text-sm ${
                  mode === "light" ? "font-semibold text-black" : "text-[white]"
                }`}
>>>>>>> origin/master
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
