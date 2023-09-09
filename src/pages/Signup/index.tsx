import { SignupForm } from "../../components/Forms/SignupForm";

export const SignUp = () => {
  return (
    <>
      <div className="flex flex-col w-full gap-6">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <SignupForm />
      </div>
    </>
  );
};
