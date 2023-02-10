import PropTypes from 'prop-types';
import { StatisticText } from './StatisticText';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticText>Good: {good}</StatisticText>
      <StatisticText>Neutral: {neutral}</StatisticText>
      <StatisticText>Bad: {bad}</StatisticText>
      <StatisticText>Total: {total}</StatisticText>
      <StatisticText>Positive feedback: {positivePercentage}</StatisticText>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
