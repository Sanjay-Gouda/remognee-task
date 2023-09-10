import { Button } from "../../Shared/Button";
import { InputField } from "../../Shared/InputField";
import { useFormik } from "formik";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector } from "react-redux";

import { useUserData } from "../../../store/slices/userData";
import { useNavigate } from "react-router";

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const SignupData: any = useSelector(useUserData);
  const navigate = useNavigate();
  console.log(SignupData);
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);

      if (
        values.email === SignupData.email &&
        values.password === SignupData.password
      ) {
        console.log("logged in");
        toast.success("Successfully, logged in");
        setTimeout(() => {
          navigate("/collection");
        }, 2000);
      } else {
        toast.success("Invalid Credentials");
      }
    },
  });

  return (
    <>
      <div className="w-full flex justify-center items-center ">
        <div className="flex flex-col w-1/5 gap-4">
          <div className="w-full">
            <InputField
              label="Email"
              placeholder="email@gmail.com"
              type="email"
              value={formik.values.email}
              name="email"
              handleChange={formik.handleChange}
            />
          </div>
          <div className="w-full">
            <InputField
              label="Password"
              placeholder="password"
              type="password"
              value={formik.values.password}
              name="password"
              handleChange={formik.handleChange}
            />
          </div>
          <div className="w-full">
            <Button btnLabel="Login" hadleClick={formik.handleSubmit} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
