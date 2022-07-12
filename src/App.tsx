import { Text } from "./components";
import Router from "./router/index";
import { Provider } from "react-redux";
import store from "./setup/redux/Store";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
