import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
	return (
		<div className='App'>
			<h1>Lets build netflix-clone</h1>
			<Row
				title='NETFLIX ORIGINALS'
				fetchUrl={requests.fetchNetworkOriginals}
			/>
			<Row title='Trending Now' fetchUrl={requests.fetchTrending} />
		</div>
	);
}

export default App;
