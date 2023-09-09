import { Button } from "../../Shared/Button";
import { InputField } from "../../Shared/InputField";
import { useFormik } from "formik";

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
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
            <Button hadleClick={formik.handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};
