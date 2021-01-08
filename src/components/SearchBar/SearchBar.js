import React, { PureComponent } from 'react';
import { toast } from 'react-toastify';

class SearchBar extends PureComponent {
    state = {
      searchQuery:'',
    }

  handleInputChange = ({ target }) => {
      this.setState({
        searchQuery: target.value
      })
  }

  onSubmitForm = (event) => {
    event.preventDefault();
    const { searchQuery } = this.state;
    searchQuery.trim() !== '' ? this.props.onSubmit(searchQuery) : toast.warn('Input search Query');
    this.reset();
  }

  reset = () => this.setState({ searchQuery: '' })

    render() {
      const { searchQuery } = this.state;
        return (
            <header className="Searchbar">
              <form className="SearchForm" onSubmit={this.onSubmitForm}>
                <button type="submit" className="SearchForm-button">
                  <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                  className="SearchForm-input"
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                  value={searchQuery}
                  onChange={this.handleInputChange}
                />
              </form>
            </header>
        )
    }
}

export default SearchBar;