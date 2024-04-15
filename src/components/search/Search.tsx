import { useState } from 'react';
import { CiSearch } from "react-icons/ci";

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className='flex relative p-1 bg-primary-bg rounded w-[80%] mx-auto rounded-3xl'>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className='p-1 border-spacing-0 bg-inherit outline-none flex-1 rounded-3xl'
      />
      <button type="submit" className='absolute right-5 text-4xl text-primary-text'><CiSearch /></button>
    </form>
  );
};

export default SearchBox;
