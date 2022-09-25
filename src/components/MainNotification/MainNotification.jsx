import PropTypes from 'prop-types';
import { StyledNotification } from './MainNotification.styled';

export const MainNotification = ({ notification }) => (
  <main>
    <StyledNotification>{notification}</StyledNotification>
  </main>
);

MainNotification.propTypes = {
  notification: PropTypes.string.isRequired,
};
