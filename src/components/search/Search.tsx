import React, { FormEvent, useEffect, useState } from 'react';
import styles from './search.module.scss';

type Props = {
  searchText?: string;
  onSubmit: (search: string) => void;
};

const Search = ({ searchText, onSubmit }: Props) => {
  const [search, setSearch] = useState('');
  useEffect(() => {
    if (searchText) setSearch(searchText);
  }, [searchText]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <form className={styles.searchWrapper} onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={handleChange}
        className={styles.input}
      />
      <button type="submit" className={styles.but}>
        Search
      </button>
    </form>
  );
};

export default Search;
