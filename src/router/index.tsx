import { routes } from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactElement } from "react";
import Login from "../pages/Login/login.main";
import Register from "../pages/Register/register.main";

export interface RouteItem {
  path: string;
  component: ReactElement;
  name: string;
  children?: Array<RouteItem>;
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((item: RouteItem, index: number) => {
          const Component = item.component as any;

          return item.children ? (
            <Route key={index} path={"/" + item.path}>
              {item.children.map((child: RouteItem, index: number) => {
                const Component = child.component as any;

                return (
                  <Route
                    key={index}
                    path={child.path}
                    element={<Component />}
                  />
                );
              })}
            </Route>
          ) : (
            <Route key={index} path={"/" + item.path} element={<Component />} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
