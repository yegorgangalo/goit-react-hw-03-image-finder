import React, {PureComponent} from 'react';
import Modal from '../Modal'

class ImageGalleryItem extends PureComponent {
    state = {
        showModal: false,
    }

    toggleModal = () => {
      this.setState(({ showModal }) => ({
        showModal: !showModal,
      }))
    }

    render() {
        const { showModal } = this.state;
        const { src, alt, fullSize } = this.props;
        return (
            <>
            <img src={src} alt={alt} onClick={this.toggleModal} className="ImageGalleryItem-image" />
            {showModal && ( <Modal onClose={this.toggleModal} src={fullSize} alt={alt} /> )}
            </>
        )
    }
}

export default ImageGalleryItem;