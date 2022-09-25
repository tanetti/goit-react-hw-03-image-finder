import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    onkeydown = this.onKeyDown;
  }

  componentWillUnmount() {
    onkeydown = null;
  }

  onKeyDown = evt => {
    if (evt.code !== 'Escape') return;

    this.props.onClose();
  };

  onOverlayClick = ({ target, currentTarget }) => {
    if (target !== currentTarget) return;

    this.props.onClose();
  };

  render() {
    return createPortal(
      <Overlay onClick={this.onOverlayClick}>
        <ModalWindow>
          <img
            src={this.props.modalImageToShow}
            alt={this.props.modalImageAlt}
          />
        </ModalWindow>
      </Overlay>,
      document.querySelector('#portal')
    );
  }
}

Modal.propTypes = {
  modalImageToShow: PropTypes.string.isRequired,
  modalImageAlt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
