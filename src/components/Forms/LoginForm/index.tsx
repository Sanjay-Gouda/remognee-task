import { Button } from "../../Shared/Button";
import { InputField } from "../../Shared/InputField";

export const LoginForm = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center ">
        <div className="flex flex-col w-1/5 gap-4">
          <div className="w-full">
            <InputField
              label="Email"
              placeholder="email@gmail.com"
              type="email"
            />
          </div>
          <div className="w-full">
            <InputField
              label="Password"
              placeholder="password"
              type="password"
            />
          </div>
          <div className="w-full">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};
