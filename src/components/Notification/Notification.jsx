import PropTypes from 'prop-types';
import { NotificationAlert } from './Notification.styled';

export const Notification = ({ message }) => {
  return <NotificationAlert>{message}</NotificationAlert>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
