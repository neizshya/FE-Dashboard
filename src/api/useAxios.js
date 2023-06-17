import { useState, useEffect } from "react";
// how to use
/*
  const { response, isLoading } = useAxios({
    api: yourAPI,
    method: yourMethod(get,post,put,delete),
    url: yourURL ('/membership'),
  });

*/

const useAxios = ({ api, method, url, body, header }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      api[method](url, JSON.parse(header), JSON.parse(body))
        .then((res) => {
          setResponse(res.data);
        })
        // .catch((err) => {
        //   setError(err);
        // })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (err) {
      setError(err);
      // console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [api, body, method, url]);

  return { response, error, isLoading, fetchData };
};
export default useAxios;
