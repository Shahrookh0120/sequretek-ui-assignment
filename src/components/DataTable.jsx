import React, { useContext, useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { DataContext } from "../context/DataContext.jsx";
const DataTable = () => {
    const {tableData,page,setPage,pageCount,setPageCount} = useContext(DataContext)
	console.log(tableData)

    const handleNext = () => {
		if (page === pageCount) return page;
		setPage(page + 1);
	};
	const handlePrev = () => {
		if (page === 1) return page;
		setPage(page - 1);
	};
    const handleActive = (index) =>{
        setPage(index + 1)
     }
	return (
		<>
        <h3 className="text-center my-5">2.Data Table with pagination</h3>
			<table className="table text-center table-bordered">
				<thead>
					<tr>
						<th>id</th>
						<th>Email</th>
						<th>First Name</th>
						<th>Image</th>
					</tr>
				</thead>
				<tbody>
					{tableData &&
						tableData.map((data, i) => {
							return (
								<tr key={i}>
									<td>{data.id}</td>
									<td>{data.email}</td>
									<td>{data.first_name}</td>
									<td > <img style={{width:'50px', height:'50px',borderRadius:'50%',border:'1px solid #000', padding:'2px'}} src={data.avatar} alt="" /></td>
								</tr>
							);
						})}
				</tbody>
			</table>
            <div>
            <Pagination>
					<Pagination.Prev
						onClick={handlePrev}
						disabled={page === 1}
					/>
					{Array(pageCount)
						.fill(null)
						.map((ele, index) => {
                            return(
                                <Pagination.Item key={index} onClick={() => handleActive(index)} active={page===index + 1 ? true :false  }>{index + 1}</Pagination.Item>
                            )
                        })}
					<Pagination.Next
                    onClick={handleNext}
                    disabled={page === pageCount}
					/>
				</Pagination>
            </div>
		</>
	);
};

export default DataTable;
