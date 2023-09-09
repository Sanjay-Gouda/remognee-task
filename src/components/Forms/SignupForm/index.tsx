import { Button } from "../../Shared/Button";
import { InputField } from "../../Shared/InputField";
import { SelectBox } from "../../Shared/Select";

export const SignupForm = () => {
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
              />
              <InputField
                type="text"
                placeholder="Last Name"
                label="Last Name"
              />
            </div>
            <div className="flex w-full justify-center items-center gap-3">
              <InputField
                type="email"
                placeholder="example@gmail.com"
                label="Email"
              />
              <InputField
                type="text"
                placeholder="mobile no"
                label="Mobile No."
              />
            </div>
            <div className="flex w-full justify-center items-center gap-3">
              <SelectBox label="Country" />
              <SelectBox label="State" />
            </div>
            <div className="flex w-full justify-center items-center gap-3">
              <SelectBox label="City" />
              <InputField type="text" placeholder="pincode" label="Pincode" />
            </div>
            <div className="flex w-full justify-center items-center gap-3">
              <InputField
                type="password"
                placeholder="password"
                label="Password"
              />
              <InputField
                type="password"
                placeholder="confirm-password"
                label="Confirm Password"
              />
            </div>

            <div className="w-full">
              <InputField type="text" placeholder="address" label="Address" />
            </div>

            <div className="w-full">
              <Button />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
