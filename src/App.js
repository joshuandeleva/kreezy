import "./App.css";
import Index from "./Components/Index";
import AboutComponent from "./Components/About";
import ContactComponent from "./Components/Contact";
import ProjectComponent from "./Components/Projects";
import BlogComponent from "./Components/Blog";
import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path={ROUTES.HOME} component={Index} />
				<Route exact path={ROUTES.ABOUT} component={AboutComponent} />
				<Route
					exact
					path={ROUTES.PROJECT}
					component={ProjectComponent}
				/>
				<Route
					exact
					path={ROUTES.CONTACT}
					component={ContactComponent}
				/>
				<Route exact path={ROUTES.BLOG} component={BlogComponent} />
			</Router>
		</div>
	);
}

export default App;
