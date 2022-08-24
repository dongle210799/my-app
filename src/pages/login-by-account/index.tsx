
import Header from "../../components/header";
import LoginByAccount from "../../modules/login/login-by-account";


export default function LoginByAccountPage() {

  return <div className="bg-[#252839] min-h-screen">
    <Header />
    <LoginByAccount />
  </div>;
}