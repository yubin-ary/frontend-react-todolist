import axios from "axios";
import { useEffect, useState } from "react";
function ApiPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const tryApiRequest = async () => {
      try {
        await axios.get("https://jsonplaceholder.typicode.om/posts?_limit=5");
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    tryApiRequest();
  }, []);

  if (isLoading) {
    return <section>Loading...</section>;
  }
  if (isError) {
    return <section>실패</section>;
  }
  return <section>성공</section>;
}
export default ApiPage;
