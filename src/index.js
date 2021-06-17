import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Home, Header, Menu, Gallery } from "./Components";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<>
      <Header />
			<Switch>
				<Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/Gallery" component={Gallery} />
			</Switch>
		</>
	);
};

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("app")
);
