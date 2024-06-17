import { useState, useEffect, useCallback } from "react";

const useFetch = (url)=>{
	const [fetchedData, setFetchData] = useState({
		data:[],
		isLoading: true,
		error:false,
	})

	const fecthData = useCallback(async()=>{
		try{
			const response = await fetch(url)
			const data = await response.json();
			if(data){
				setFetchData({
					data: data.results ? data.results : data,
					isLoading: false,
					error:false,
				})
			}
		}catch(error){
			setFetchData({
				data:[],
				isLoading:false,
				error:true,
			})
			throw error
		}
	},[ url ])

	useEffect(()=>{
		fecthData();
	},[url, fecthData]);

	const {data, isLoading, error} = fetchedData
	return { data, isLoading, error}
}

export default useFetch