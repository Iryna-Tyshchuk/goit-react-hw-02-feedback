import { Button } from './Button';

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
