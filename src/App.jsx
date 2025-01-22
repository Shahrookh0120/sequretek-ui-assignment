import React from "react";
import DataTable from "./components/DataTable";
import Graph from "./components/Graph";
import DataContextProvider from "./context/DataContext";

const App = () => {
	return (
		<>
			<DataContextProvider>
				<div className="container">
					<div className="row">
                    <div className="col-lg-6">
						<Graph />
					</div>
					<div className="col-lg-6">
						<DataTable />
					</div>
                    </div>
				</div>
			</DataContextProvider>
		</>
	);
};

export default App;
