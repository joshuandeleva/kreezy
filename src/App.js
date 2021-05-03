import "./App.css";
import Index from "./Components/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Router>
				<Router path="/">
					<Index />
				</Router>
			</Router>
		</div>
	);
}

export default App;
