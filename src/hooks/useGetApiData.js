import { useState, useEffect } from "react";

const useGetApiData = (url) => {
  const [data, setData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
 fetchPost(url);
  }, [url]);
async function fetchPost(url){
const res = await fetch(url);
const data = await res.json();
setData(data);
setFilteredList(data);
}
  return [filteredList , data , setFilteredList];
};

export default useGetApiData;
