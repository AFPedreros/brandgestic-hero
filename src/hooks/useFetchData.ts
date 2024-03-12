import { useEffect, useState } from "react";

import { ApiResponse } from "@/types/index";

export function useFetchData() {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fu6hk3qh0f.execute-api.eu-west-3.amazonaws.com/default/frontendTest"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return { data };
}
