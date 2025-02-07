import React, { useState, useEffect } from "react";
import apiClient from "../utils/apiClient";

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/some-protected-endpoint");
        setData(response.data);  
        setLoading(false);  
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);  
      }
    };

    fetchData();
  }, []);  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetcher;
