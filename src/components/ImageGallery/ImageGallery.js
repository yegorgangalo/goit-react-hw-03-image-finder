import React, { PureComponent } from 'react';
import { ImSpinner6 } from 'react-icons/im';
import s from './ImageGallery.module.css';
// import PropTypes from 'prop-types';

const keyAPI = '19532775-cd1fec64673db4c80a00103d2';

class ImageGallery extends PureComponent {
    state = {
        status: 'idle',
        error: '',
        hits: [],
        page: 1,
    }

    staticFetchOptions = {
        perPage: 4,
        staticURL: 'https://pixabay.com/api/?image_type=photo&orientation=horizontal',
    }

    componentDidUpdate(prevProps, prevState) {
        const { searchQuery } = this.props;
        prevProps.searchQuery !== searchQuery && this.fetchQuery();
        // prevProps.searchQuery !== searchQuery && this.resetGallery() && this.fetchQuery();
    }

    fetchQuery = () => {
        console.log('this.state.page in fetch', this.state.page);
        const { searchQuery } = this.props;
        const { page } = this.state;
        const { staticURL, perPage } = this.staticFetchOptions;
        this.setState({ status: 'pending' });
        const url = `${staticURL}&q=${searchQuery}&page=${page}&per_page=${perPage}&key=${keyAPI}`;

    return setTimeout(() => {
      fetch(url)
      .then(res => {
          console.dir(res);
          if (!res.ok) {
              return Promise.reject(new Error(`There is no image with tag ${searchQuery}`));
          }
          return res.json();
      })
      .then(({ hits }) => {
        if (hits.length===0) {
              return Promise.reject(new Error(`There is no image with tag ${searchQuery}`));
          }
        this.setState((prevState) => ({
            hits: [...prevState.hits, ...hits],
            status: 'resolved',
            page: prevState.page +1,
        }))
      }
      )
      .catch(error => this.setState({ error, status: 'rejected' }))
      }, 500)
    }

    render() {
        const { hits, error, status } = this.state;
        if (status === 'idle') {
            return <h1>Input tag to find images</h1>
        }
        if (status === 'pending') {
            return <ImSpinner6 size="36" className={s.iconSpin}/>
        }
        if (status === 'rejected') {
            return <h1>{error.message}</h1>
        }
        if (status === 'resolved') {
            return (<>
                <ul className="ImageGallery">
                {hits.map(({ id, webformatURL, largeImageURL, tags }) => {
                    return <li className="ImageGalleryItem" key={id}>
                        <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" data-full-size={largeImageURL}/>
                </li>
                })}
                </ul>
                <button type="button" onClick={this.fetchQuery}>More</button>
                </>
            )
        }
    }
}

export default ImageGallery;