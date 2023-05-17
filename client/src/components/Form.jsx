import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../state";
import Dropzone from "react-dropzone";
import { useState } from "react";

// CONFIG REGISTER SCHEMA
const registerSchema = yup.object().shape({
  userName: yup.string().required("required"),
  email: yup.string().required("required"),
  password: yup.string().required("required"),
  picture: yup.string().required("required"),
  confirm_password: yup
    .string()
    .label("confirm password")
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

// CONFIG LOGIN SCHEMA
const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("required"),
  password: yup.string().required("required"),
});

// INITIAL VALUES
const initialValuesRegister = {
  userName: "",
  email: "",
  password: "",
  picture: "",
  confirm_password: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const register = async (values, onSubmitProps) => {
    // form with image
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    const savedUserResponse = await fetch(
      "http://localhost:8080/auth/register",
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
    const loggedInResponse = await fetch("http://localhost:8080/auth/login", {
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

  const handleSubmitForm = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleSubmitForm}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col text-[white] text-glow pb-5">
            <label className="pb-2" htmlFor="userName">
              Username
            </label>
            <input
              className="text-[white] h-8 bg-[#0e1721] "
              name="userName"
              type="text"
              label="Username"
              value={values.userName}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.userName) && Boolean(errors.userName)}
              //   helperText={touched.userName && errors.userName}
            />
          </div>
          <div className="flex flex-col text-[white] text-glow pb-5">
            <label className="pb-2" htmlFor="email">
              Email
            </label>
            <input
              className="text-[white] h-8 bg-[#0e1721] "
              name="email"
              type="text"
              label="Email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.email) && Boolean(errors.email)}
              //   helperText={touched.email && errors.email}
            />
          </div>
          <div className="flex flex-col text-[white] text-glow pb-5">
            <label className="pb-2" htmlFor="password">
              Password
            </label>
            <input
              className="text-[white] h-8 bg-[#0e1721] "
              name="password"
              type="password"
              label="Password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.password) && Boolean(errors.password)}
              //   helperText={touched.password && errors.password}
            />
          </div>
          <div className="flex flex-col text-[white] text-glow pb-5">
            <label className="pb-2" htmlFor="password">
              Confirm Password
            </label>
            <input
              className="text-[white] h-8 bg-[#0e1721] "
              name="confirm_password"
              type="password"
              label="Confirm Password"
              value={values.confirm_password}
              onBlur={handleBlur}
              onChange={handleChange}
              error={
                Boolean(touched.confirm_password) &&
                Boolean(errors.confirm_password)
              }
              //   helperText={touched.confirm_password && errors.confirm_password}
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
                            ? "Choose photo"
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
          <div className="mt-5">
            <button
              className="w-full text-white border-[2px] rounded-md px-2 md:py-1 py- w-full
                border-[#9ccddc] md:bg-[#054569] bg-[#062c43] font-semibold hover:bg-[#9ccddc] md:mt-0 mt-2 
                hover:text-[white] duration-200 ease-in-out hover:scale-[1.02]"
            >
              Register
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
