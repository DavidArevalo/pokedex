import { useState, useEffect } from "react";

const useConsult = (URL) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const consultApi = async () => {};
};
