import { Provider } from "react-redux";
import App from "./app/index";
import { store } from "./app/utils/store";

const MainApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default MainApp;
