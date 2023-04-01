import React, { useEffect, useRef, useState } from 'react';
import styles from './search.module.scss';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const searchRef = useRef<string>('');
  useEffect(() => {
    const searchString = localStorage.getItem('searchString');
    if (searchString) setSearchText(searchString);
    return () => {
      localStorage.setItem('searchString', searchRef.current);
    };
  }, []);

  useEffect(() => {
    searchRef.current = searchText;
  }, [searchText]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        value={searchText}
        placeholder="Search..."
        onChange={handleChange}
        className={styles.input}
      />
      <button type="button" className={styles.but}>
        Search
      </button>
    </div>
  );
};

export default Search;
