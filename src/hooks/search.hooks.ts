import { useEffect, useState } from "react";

const mockData = [{
  did: 'did:example:123',
  name: 'Container 1',
}]
export const useSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const onSearch = async () => {
    setIsLoading(true);
    try {
      // const response = await fetch('https://api.example.com/search', {
      //   method: 'POST',
      //   body: JSON.stringify({ search }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      //  MOCK
      const data = mockData;
      const findAll = data.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()));
      setSearchResults(findAll);
    } catch (error) {
      console.error(['Error searching', error]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // Every searchInput change, need to wait user input done to avoid spam on server api
    // Set a delay (e.g., 500ms) before calling onSearch
    const delayDebounceFn = setTimeout(() => {
      if (searchInput) {
        onSearch();
      }
    }, 1000);

    // Clear the timeout if searchInput changes before the delay is over
    return () => clearTimeout(delayDebounceFn);
  }, [searchInput]);

  return { searchInput, setSearchInput, searchResults };
}