import React from 'react';
import styles from './search.module.scss';
interface Props {}
interface State {
  searchText: string;
}

class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  componentDidMount(): void {
    this.setState({ searchText: localStorage.getItem('searchString') || '' });
  }
  componentWillUnmount(): void {
    localStorage.setItem('searchString', this.state.searchText);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchText: e.target.value });
  };
  render() {
    return (
      <div className={styles.searchWrapper}>
        <input
          type="text"
          value={this.state.searchText}
          placeholder="Search..."
          onChange={this.handleChange}
          className={styles.input}
        />
        <button type="button" className={styles.but}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;
