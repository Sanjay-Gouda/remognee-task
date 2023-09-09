import { useFormik } from "formik";
import { Button } from "../../Shared/Button";
import { InputField } from "../../Shared/InputField";
import { SelectBox } from "../../Shared/Select";

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

export const SignupForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values, "values");
    },
  });
  return (
    <>
      <form>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-1/2 flex flex-col justify-center items-center gap-4 ">
            <div className="flex w-full justify-center items-center gap-3">
              <InputField
                type="text"
                placeholder="First Name"
                label="First Name"
                name="firstName"
                value={formik.values.firstName}
                handleChange={formik.handleChange}
              />
              <InputField
                type="text"
                placeholder="Last Name"
                label="Last Name"
                name="lastName"
                value={formik.values.lastName}
                handleChange={formik.handleChange}
              />
            </div>
            <div className="flex w-full justify-center items-center gap-3">
              <InputField
                type="email"
                placeholder="example@gmail.com"
                label="Email"
                name="email"
                value={formik.values.email}
                handleChange={formik.handleChange}
              />
              <InputField
                type="text"
                placeholder="mobile no"
                label="Mobile No."
                name="mono"
                value={formik.values.mono}
                handleChange={formik.handleChange}
              />
            </div>
            <div className="flex w-full justify-center items-center gap-3">
              <SelectBox label="Country" />
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
            <div className="flex w-full justify-center items-center gap-3">
              <InputField
                type="password"
                placeholder="password"
                label="Password"
                name="password"
                value={formik.values.password}
                handleChange={formik.handleChange}
              />
              <InputField
                type="password"
                placeholder="confirm-password"
                label="Confirm Password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                handleChange={formik.handleChange}
              />
            </div>

            <div className="w-full">
              <InputField
                type="text"
                placeholder="address"
                label="Address"
                name="address"
                value={formik.values.address}
                handleChange={formik.handleChange}
              />
            </div>

            <div className="w-full">
              <Button hadleClick={formik.handleSubmit} />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
