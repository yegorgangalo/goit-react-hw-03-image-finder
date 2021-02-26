import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';

class App extends Component {
    state = {
      searchQuery: '',
    }

    setSearchQuery = (searchQuery) => {
      this.setState({ searchQuery });
    }



    render() {
      const { searchQuery } = this.state;
      return (<>
        <SearchBar onSubmit={this.setSearchQuery} />
        <ImageGallery searchQuery={searchQuery} />
        <ToastContainer autoClose={3000}/>
        </>)
    }
}

export default App;
