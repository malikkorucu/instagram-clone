import Home from "../pages/Home/home.main";
import Login from "../pages/Login/login.main";
import Register from "../pages/Register/register.main";

export const routes = [
    {
      name: "Auth",
      path: "auth",
      children: [
        {
          name: "Login",
          path: "login",
          component: Login,
        },
        {
          name: "Register",
          path: "register",
          component: Register,
        },
      ],
    },
    {
      name: "Home",
      path: "/",
      component: Home
    },
  ] as any;