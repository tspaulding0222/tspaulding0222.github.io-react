import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import Unsplash from 'unsplash-js';

import Home from "./components/Home";
import UnsplashImage from "./components/UnsplashImage";
import style from "./styles/Main.scss";

const unsplashAuth = new Unsplash({
    applicationId: "e0ab8e6db30140922270dbbbae440d167e44572cfc92bc43e3cb2727ec0bf014",
    secret: "904e40c14db17202d6048d5dcf1c97f3821904bf5d840c8aee613f379c8055b8",
    callbackUrl: "/",
    headers: {
        "Authorization": "Client-ID e0ab8e6db30140922270dbbbae440d167e44572cfc92bc43e3cb2727ec0bf014"
    }
});

const store = createStore(rootReducer);
store.dispatch({
    type: "SET_UNSPLASH",
    object: unsplashAuth
});

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
            >
				<Route path="/" component={Home} />
				<Route path="/image" component={UnsplashImage} />
			</AnimatedSwitch>
		</Router>
	</Provider>,
	document.getElementById("app")
);
