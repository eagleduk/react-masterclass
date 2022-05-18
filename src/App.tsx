import {Routes, Route} from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Series from "./Routes/Series";

function App() {
	return (<>
		<Header />
		<Routes>
			<Route path="/series" element={<Series />}/>
			<Route path="/" element={<Home />}/>
		</Routes>
	</>);
}

export default App;
