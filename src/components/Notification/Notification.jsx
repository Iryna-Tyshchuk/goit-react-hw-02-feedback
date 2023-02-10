import PropTypes from 'prop-types';
import { SectionTitle } from '../Section/SectionTitle';

export const Notification = ({ message }) => (
  <SectionTitle>{message}</SectionTitle>
);
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
