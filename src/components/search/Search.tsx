import { useState } from 'react';
import { CiSearch } from "react-icons/ci";

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className='flex relative p-1 bg-primary-bg w-[80%] mx-auto rounded-3xl'>
      <input
        type="search"
        placeholder="Search Bookings..."
        value={searchQuery}
        onChange={handleInputChange}
        className='p-1 pl-3 border-spacing-0 bg-inherit outline-none flex-1 rounded-3xl'
      />
      <button type="submit" className='absolute right-5 text-4xl text-primary-text'><CiSearch /></button>
    </form>
  );
};

export default SearchBox;
