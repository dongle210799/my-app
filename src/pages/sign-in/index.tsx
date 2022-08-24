
import Header from "../../components/header";
import LoginForm from "../../modules/login/login-form";

export default function LoginPage() {

  return <div className="bg-[#010b44] min-h-screen flex flex-col items-center justify-center">
    <Header />
    <LoginForm />
  </div>;
}