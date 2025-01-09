import React, { useContext, useState } from "react";
import Chart from "react-apexcharts";
import { DataContext } from "../context/DataContext";
const Graph = () => {
	const { totalData,page ,pageCount} = useContext(DataContext);
   
	return (
		<div className="container">
			<h3 className="text-center my-5">graph summarizing the data</h3>
			<div className="w-50 m-auto">
				<Chart
					type="bar"
					height={550}
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
