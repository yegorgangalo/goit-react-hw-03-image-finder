import React, { PureComponent } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryList from '../ImageGalleryList';
import Button from '../Button';
// import PropTypes from 'prop-types';

const keyAPI = '19532775-cd1fec64673db4c80a00103d2';
const status = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',
}
const { IDLE, PENDING, REJECTED, RESOLVED } = status;
const defaultState = {
        status: IDLE,
        error: '',
        imgArray: [],
        totalHitsLength: 0,
        page: 1,
    }

class ImageGallery extends PureComponent {

    state = { ...defaultState }

    staticFetchOptions = {
        perPage: 12,
        staticURL: 'https://pixabay.com/api/?image_type=photo&orientation=horizontal',
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchQuery !== this.props.searchQuery) {
            this.resetGallery(this.fetchQuery);
        }
        if (prevState.imgArray !== this.state.imgArray) {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
        }
    }

    fetchQuery = () => {
        this.setState({ status: PENDING });
        const { searchQuery } = this.props;
        const { page, imgArray } = this.state;
        const { staticURL, perPage } = this.staticFetchOptions;
        const url = `${staticURL}&q=${searchQuery}&page=${page}&per_page=${perPage}&key=${keyAPI}`;

    return setTimeout(() => {
      fetch(url)
      .then(res => {
        //   console.dir(res);
          if (!res.ok) {
              return Promise.reject(new Error(`There is no image with tag ${searchQuery}`));
          }
          return res.json();
      })
          .then(({ hits, totalHits }) => {
            //   console.log(totalHits);
        if (hits.length===0 && imgArray.length===0) {
              return Promise.reject(new Error(`There is no image with tag: ${searchQuery}`));
          }
        this.setState((prevState) => ({
            imgArray: [...prevState.imgArray, ...hits],
            totalHits: totalHits,
            status: RESOLVED,
        }));
        this.incrementPage();
      }
      )
      .catch(error => this.setState({ error, status: REJECTED }))
      }, 500)
    }

    incrementPage = () => this.setState((prevState) => ({ page: prevState.page +1 }));

    resetGallery = (callback = null) => this.setState({ ...defaultState }, callback);

    buttonLoadType = () => {
        const { imgArray, page, totalHits, status } = this.state;
        let btnType = 'more';
        if(page === 1) {btnType = 'spinner'};
        if (status === PENDING && page>1) { btnType = 'loading' };
        if (imgArray.length >= totalHits) { btnType = 'hidden' };
        return btnType;
    }

    render() {
        const { imgArray, error, status } = this.state;
        const buttonType = this.buttonLoadType();

        if (status === IDLE) {
            return <h1 className={s.info}>Input tag to find images</h1>
        }
        if (status === PENDING) {
            return (
                <>
                <ImageGalleryList imgArray={imgArray}/>
                <Button type={buttonType}/>
                </>
            )
        }
        if (status === REJECTED) {
            return <h1 className={s.info}>{error.message}</h1>
        }
        if (status === RESOLVED) {
            return (
                <>
                <ImageGalleryList imgArray={imgArray}/>
                <Button type={buttonType} onClickFetch={this.fetchQuery} />
                </>
            )
        }
    }
}

export default ImageGallery;