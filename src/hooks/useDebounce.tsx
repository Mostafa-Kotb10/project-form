import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay: number = 500) {
  const [debouncedData, setDebouncedData] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedData(value), delay);

    return () => clearTimeout(timeout);
  }, [delay, value]);

  return debouncedData;
};

export default useDebounce;
