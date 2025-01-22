import React, { useContext, useState } from "react";
import Chart from "react-apexcharts";
import { DataContext } from "../context/DataContext";
const Graph = () => {
	const { totalData,page ,pageCount} = useContext(DataContext);
   
	return (
		<div className="container">
			<h3 className="text-center my-5 ">1.Graph summarizing the data</h3>
			<div className="m-auto border border-1 p-3">
				<Chart
					type="bar"
					height={500}
					series={[
						{
							data: [totalData, pageCount, page],
						},
					]}
					options={{

                        xaxis:{
                            categories:["Total Data", 'Total Page','Current Page']
                        }
                    }}
				></Chart>
			</div>
		</div>
	);
};

export default Graph;
