import PropTypes from 'prop-types';
import { Button } from '../Button/Button';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(el => (
        <Button key={el} type={'button'} onClick={() => onLeaveFeedback(el)}>
          {el}
        </Button>
      ))}
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
