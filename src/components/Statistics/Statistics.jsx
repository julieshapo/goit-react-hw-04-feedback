import PropTypes from 'prop-types';
import { Text, Wrap } from './Statistics.styled';

export const Statistics = ({ options, statistic, total, positiveFeedback }) => {
  return (
    <Wrap>
      {options.map((option, i) => {
        return (
          <Text key={i}>
            {option}: {statistic[option]}
          </Text>
        );
      })}
      <Text>total: {total}</Text>
      <Text>positive feedback: {positiveFeedback()}%</Text>
    </Wrap>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  statistic: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.func.isRequired,
};
