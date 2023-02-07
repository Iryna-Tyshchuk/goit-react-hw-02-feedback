import { Button } from './Button';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <Button
        type={'button'}
        disabled={false}
        children={'Good'}
        onClick={() => onLeaveFeedback()}
        data-name={'good'}
      />

      <Button
        type={'button'}
        disabled={false}
        children={'Neutral'}
        onClick={() => onLeaveFeedback()}
        data-name={'neutral'}
      />

      <Button
        type={'button'}
        disabled={false}
        children="Bad"
        onClick={() => onLeaveFeedback()}
        data-name={'bad'}
      />
    </>
  );
};
