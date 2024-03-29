import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./components/app";
import store from "./store";
import { theme } from "./utils/theme";
import "./server";

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </HashRouter>
    </Provider>,
    document.getElementById("root")
);

