import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends PureComponent {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
    }

    componentDidMount() {
        window.addEventListener('keydown', this.keydownCloseModal);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.keydownCloseModal);
    }

    keydownCloseModal = ({ code }) => {
        code === "Escape" && this.props.onClose();
    }

    backdropCloseModal = ({ target, currentTarget }) => {
        // target === currentTarget && this.props.onClose();
        this.props.onClose()
    }

    render() {
        const { src, alt } = this.props;
        return createPortal(
            <div className="Overlay" onClick={this.backdropCloseModal}>
              <div className="Modal">
                <img src={src} alt={alt} />
              </div>
            </div>
        , modalRoot)
    }
}

export default Modal;