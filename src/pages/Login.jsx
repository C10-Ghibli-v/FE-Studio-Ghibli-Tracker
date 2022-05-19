import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

import { FaLock, FaUserAlt, FaTwitter, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ user: "", password: "" });
  const nav = useNavigate();
  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch({
        method: "POST",
        url: "",
        body: JSON.stringify(form),
      });
      const data = await res.json();
      console.log(data);
      nav("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const handleTwitterLogin = () => {
    console.log("login con twitter");
  };
  const handleFacebookLogin = () => {
    console.log("login con facebook");
  };

  return (
    <div className="flex flex-col max-w-3xl mx-auto justify-between min-h-screen px-5 py-20">
      <h1 className="text-3xl text-white text-center">Studio Ghibli Tracker</h1>
      <form onSubmit={handleSubmitLogin} className="flex flex-col gap-5">
        <Input
          type="text"
          name="user"
          id="login_user"
          label="Usuario"
          Icon={FaUserAlt}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="password"
          id="login_password"
          label="Contraseña"
          Icon={FaLock}
          onChange={handleInputChange}
        />
        <Button>Inicia sesion</Button>
      </form>
      <div className="flex flex-col gap-3">
        <Button
          Icon={FaTwitter}
          variant="secondary"
          onClick={handleTwitterLogin}
        >
          Ingresa con twitter
        </Button>
        <Button
          Icon={FaFacebook}
          variant="secondary"
          onClick={handleFacebookLogin}
        >
          Ingresa con facebook
        </Button>
      </div>
    </div>
  );
};

export default Login;
