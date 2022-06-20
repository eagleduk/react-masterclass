import { useQuery } from "react-query";
import {Routes, Route} from "react-router-dom"
import { getTVGeners, ITvGenerList } from "./api";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Series from "./Routes/Series";

function App() {

    useQuery<ITvGenerList>(["tvSeries", "gener"], getTVGeners);

	return (<>
		<Header />
		<Routes>
			<Route path="/series" element={<Series />}/>
			<Route path="/" element={<Home />}/>
		</Routes>
	</>);
}

export default App;
