import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();



const DataContextProvider = ({ children }) => {
    const [totalData, setTotalData] = useState()
	const [tableData, setTableData] = useState();
	const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0);

	useEffect(() => {
		fetchData();
	}, [page]);

	const fetchData = async () => {
		const response = await fetch(`https://reqres.in/api/users?page=${page}`);
		const resData = await response.json();
        setTotalData(resData.total)
		setTableData(resData.data);
        setPageCount(resData.total_pages)
	};
	return (
		<DataContext.Provider value={{totalData,tableData,pageCount,page,setPage,setPageCount}}>
			{children}
		</DataContext.Provider>
	);
};

export default DataContextProvider;