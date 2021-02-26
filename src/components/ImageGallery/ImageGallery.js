import React, { PureComponent } from 'react';
import { imageAPI } from '../../APIservice';
import Notification from '../Notification'
import ImageGalleryList from '../ImageGalleryList';
import Button from '../Button';
import PropTypes from 'prop-types';

const status = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',
}
const { IDLE, PENDING, REJECTED, RESOLVED } = status;

const defaultState = {
        status: IDLE,
        imgFetched: [],
        imgTotal: 0,
        page: 1,
        error: '',
    }

class ImageGallery extends PureComponent {
    static propTypes = {
        searchQuery: PropTypes.string.isRequired,
    }

    state = { ...defaultState }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchQuery !== this.props.searchQuery) {
            this.resetGallery(this.fetchQuery);
        }
        if (prevState.imgFetched !== this.state.imgFetched) {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
        }
    }

    fetchQuery = () => {
        this.setState({ status: PENDING });
        const { searchQuery } = this.props;
        const { page, imgFetched } = this.state;

        return setTimeout(() => {
            imageAPI(searchQuery, page)
                .then(({ hits, totalHits }) => {
                    if (hits.length === 0 && imgFetched.length === 0) {
                        return Promise.reject(new Error(`There is no image with tag: ${searchQuery}`));
                    }
                    this.setState((prevState) => ({
                        imgFetched: [...prevState.imgFetched, ...hits],
                        imgTotal: totalHits,
                        status: RESOLVED,
                    }));
                    this.incrementPage();
                })
                .catch(error => this.setState({ error, status: REJECTED }))
        }, 500);

    }

    // tryFetch = () => callBoardAPI();

    incrementPage = () => this.setState((prevState) => ({ page: prevState.page +1 }));

    resetGallery = (callback = null) => this.setState({ ...defaultState }, callback);

    buttonLoadType = () => {
        const { imgFetched, page, totalHits, status } = this.state;
        let btnType = 'more';
        if(page === 1) {btnType = 'spinner'};
        if (status === PENDING && page>1) { btnType = 'loading' };
        if (imgFetched.length >= totalHits) { btnType = 'hidden' };
        return btnType;
    }

    render() {
        const { imgFetched, error, status } = this.state;
        const buttonType = this.buttonLoadType();

        if (status === IDLE) {
            return <Notification text="Input tag to find images"/>
        }
        if (status === PENDING) {
            return (
                <>
                <ImageGalleryList imgArray={imgFetched}/>
                <Button type={buttonType}/>
                </>
            )
        }
        if (status === REJECTED) {
            return <Notification text={error.message}/>
        }
        if (status === RESOLVED) {
            return (
                <>
                <ImageGalleryList imgArray={imgFetched}/>
                    <Button type={buttonType} onClickFetch={this.fetchQuery} />
                    {/* <button type="button" onClick={this.tryFetch}>tryFetch</button> */}
                </>
            )
        }
    }
}

export default ImageGallery;