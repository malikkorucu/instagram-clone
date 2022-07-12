import { toast } from "react-toastify";
import authRedux from "../../redux/auth";

const DEV = process.env.NODE_ENV === "development";
export const BASE_URL = DEV
  ? "http://localhost:3000/"
  : "http://localhost:3000/";
const API_URL = BASE_URL + "api/";

export const IMAGE_URL = "http://localhost:3000/";

export default function setupAxios(axios: any, store: any) {
  axios.defaults.headers.Accept = "application/json";
  axios.defaults.baseURL = API_URL;

  axios.interceptors.request.use(
    (config: any) => {
      const { auth: { accessToken } } = store.getState(); // prettier-ignore

      if (!accessToken) {
        config.headers.Authorization =
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGY0ZjUwZTQyYzY5NDUzNjAxODQzYyIsIm5hbWUiOiJUZXN0IEtvcnVjdSIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJpYXQiOjE2NTYxNTI0MzIsImV4cCI6MTY1NjIzODgzMn0.HSTNlCEIlRYb31-FhfwQBWOVScg55m_-4FyBrGrUN5I";
      }

      return config;
    },
    (err: any) => {}
  );
  axios.interceptors.response.use(
    (response: any) => {
      console.log(response);
      return response.data;
    },
    (err: any) => {
      if (err?.response?.data?.code === 401) {
        store.dispatch(authRedux.actions.logout());
      }
      toast.error(err?.response?.data?.message);
      return err.response.message;
    }
  );
}
