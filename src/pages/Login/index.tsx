import { LoginForm } from "../../components/Forms/LoginForm";

export const Login = () => {
  return (
    <>
      <div className="flex flex-col w-full gap-6">
        <h1 className="text-3xl font-bold">Login</h1>
        <LoginForm />
      </div>
    </>
  );
};
