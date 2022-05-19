import { Button } from "../components/Button";
import { Input } from "../components/Input";

import { FaLock, FaUserAlt, FaTwitter, FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex flex-col max-w-3xl mx-auto justify-between min-h-screen px-5 py-20">
      <h1 className="text-3xl text-white text-center">Studio Ghibli Tracker</h1>
      <div className="flex flex-col gap-5">
        <Input
          type="text"
          name="user"
          id="login_user"
          label="Usuario"
          Icon={FaUserAlt}
        />
        <Input
          type="text"
          name="password"
          id="login_password"
          label="Contraseña"
          Icon={FaLock}
        />
        <Button>Inicia sesion</Button>
      </div>
      <div className="flex flex-col gap-3">
        <Button Icon={FaTwitter} variant="secondary">
          Ingresa con twitter
        </Button>
        <Button Icon={FaFacebook} variant="secondary">
          Ingresa con facebook
        </Button>
      </div>
    </div>
  );
};

export default Login;
