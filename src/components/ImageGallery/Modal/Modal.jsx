import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    onkeydown = this.onKeyDown;

    const overlay = document.querySelector('[data-action="overlay"]');

    overlay.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    onkeydown = null;

    const overlay = document.querySelector('[data-action="overlay"]');

    overlay.removeEventListener('click', this.onClick);
  }

  onKeyDown = evt => {
    if (evt.code !== 'Escape') return;

    this.props.onClose();
  };

  onClick = evt => {
    if (!evt.target?.dataset.action) return;

    this.props.onClose();
  };

  render() {
    return createPortal(
      <Overlay data-action="overlay">
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
