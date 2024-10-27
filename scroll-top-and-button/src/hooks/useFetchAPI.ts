import { useEffect, useState } from "react";

export default function useGetData<T>(url: string, options: RequestInit = {}) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getDataAPI = async () => {
    setLoading(true);
    try {
      const res = await fetch(url, options);
      if (!res.ok) {throw new Error("HTTP error");}

      const data = await res.json() as T;
      console.log(data);
      setData(data);
      setError(null);
    } catch (err) {
      setError(`${err} - Try again later`);
    } finally {
      setLoading(false);
    }
  }

  const getNewData = async () => {
    setData(null);
    getDataAPI()
  }

  useEffect(() => {
    getDataAPI();   
  }, [url])

  return { data, loading, error, getNewData };
}