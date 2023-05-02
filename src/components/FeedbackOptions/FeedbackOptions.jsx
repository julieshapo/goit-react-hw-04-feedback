import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onStateUpdate }) => {
  return options.map((item, i) => {
    return (
      <Button key={i} onClick={() => onStateUpdate(item)} type="button">
        {item}
      </Button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  onStateUpdate: PropTypes.func.isRequired,
};
