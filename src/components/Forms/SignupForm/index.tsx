import { useFormik } from "formik";
import { Button } from "../../Shared/Button";
import { InputField } from "../../Shared/InputField";
import * as Yup from "yup";
import { SelectBox } from "../../Shared/Select";
import { useDispatch } from "react-redux/es/exports";
import { Country, State, City } from "country-state-city";
import { useEffect, useState } from "react";
import { setUserData } from "../../../store/slices/userData";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mono: "",
  password: "",
  confirmPassword: "",
  pincode: "",
  state: "",
  city: "",
  country: "",
  address: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required "),
  lastName: Yup.string().required("Last Name is required "),
  address: Yup.string().required("Address is required "),
  email: Yup.string()
    .required("email is required ")
    .email("Invalid email address"),
  mono: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid Mobile number")
    .required(" Mobile Number is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Confirm password must same as password"),
});

export const SignupForm = () => {
  const [countryId, setCountryId] = useState();
  const [countryState, setCountryState] = useState<any>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(setUserData(values));
      console.log(values, "values");

      toast.success("Signup ,Successfully");
      setTimeout(() => {
        navigate("/login");
      }, 2000);

      // navigate("/login");
    },
  });

  const handleSelectCountry = (e: any) => {
    console.log(e.target.value);
    setCountryId(e.target.value);
  };

  // const STATE = State.getAllStates();

  // useEffect(() => {
  //   const getState = STATE.find((state) => {
  //     return state.isoCode === countryId;
  //   });
  //   setCountryState(getState);

  //   console.log(getState, "state");
  // }, [countryId]);

  return (
    <>
      <form>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-1/2 flex flex-col justify-center items-center gap-4 ">
            <div className="flex w-full justify-center items-center gap-3">
              <div className="flex flex-col gap-2 w-full">
                <InputField
                  type="text"
                  placeholder="First Name"
                  label="First Name"
                  name="firstName"
                  value={formik.values.firstName}
                  handleChange={formik.handleChange}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="text-red-600 flex justify-start items-start">
                    {formik.errors.firstName}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <InputField
                  type="text"
                  placeholder="Last Name"
                  label="Last Name"
                  name="lastName"
                  value={formik.values.lastName}
                  handleChange={formik.handleChange}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <div className="text-red-600 flex justify-start items-start">
                    {formik.errors.lastName}
                  </div>
                )}
              </div>
            </div>
            <div className="flex w-full justify-center items-center gap-3">
              <div className="flex flex-col gap-2 w-full">
                <InputField
                  type="email"
                  placeholder="example@gmail.com"
                  label="Email"
                  name="email"
                  value={formik.values.email}
                  handleChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-600 flex justify-start items-start">
                    {formik.errors.email}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <InputField
                  type="text"
                  placeholder="mobile no"
                  label="Mobile No."
                  name="mono"
                  value={formik.values.mono}
                  handleChange={formik.handleChange}
                />
                {formik.touched.mono && formik.errors.mono && (
                  <div className="text-red-600 flex justify-start items-start">
                    {formik.errors.mono}
                  </div>
                )}
              </div>
            </div>
            <div className="flex w-full justify-center items-center gap-3">
              <SelectBox
                label="Country"
                dataSet={Country.getAllCountries()}
                handleSelect={(e) => handleSelectCountry(e)}
              />
              <SelectBox label="State" />
            </div>
            <div className="flex w-full justify-center items-center gap-3">
              <SelectBox label="City" />
              <InputField
                type="text"
                placeholder="pincode"
                label="Pincode"
                name="pincode"
                value={formik.values.pincode}
                handleChange={formik.handleChange}
              />
            </div>
            <div className="flex w-full justify-center items-start gap-3">
              <div className="flex flex-col gap-2 w-full">
                <InputField
                  type="password"
                  placeholder="password"
                  label="Password"
                  name="password"
                  value={formik.values.password}
                  handleChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-600 flex justify-start items-start">
                    {formik.errors.password}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <InputField
                  type="password"
                  placeholder="confirm-password"
                  label="Confirm Password"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  handleChange={formik.handleChange}
                />
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <div className="text-red-600 flex justify-start items-start">
                      {formik.errors.confirmPassword}
                    </div>
                  )}
              </div>
            </div>

            <div className="w-full">
              <div className="flex flex-col gap-2 w-full">
                <InputField
                  type="text"
                  placeholder="address"
                  label="Address"
                  name="address"
                  value={formik.values.address}
                  handleChange={formik.handleChange}
                />
                {formik.touched.address && formik.errors.address && (
                  <div className="text-red-600 flex justify-start items-start">
                    {formik.errors.address}
                  </div>
                )}
              </div>
            </div>

            <div className="w-full">
              <Button btnLabel="Sign Up" hadleClick={formik.handleSubmit} />
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};
