import PropTypes from 'prop-types';
import {
  FeedbackCountersItem,
  FeedbackCountersList,
} from './Statistics.styled';

export const Statistics = ({
  goodFeedbacks,
  neutralFeedbacks,
  badFeedbacks,
  totalFeedbacks,
  positiveFeedbacksPercentage,
}) => {
  return (
    <>
      <FeedbackCountersList>
        <FeedbackCountersItem>Good: {goodFeedbacks}</FeedbackCountersItem>
        <FeedbackCountersItem>Neutral: {neutralFeedbacks}</FeedbackCountersItem>
        <FeedbackCountersItem>Bad: {badFeedbacks}</FeedbackCountersItem>
        <FeedbackCountersItem>Total: {totalFeedbacks}</FeedbackCountersItem>
        <FeedbackCountersItem>
          Positive feedback: {positiveFeedbacksPercentage}%
        </FeedbackCountersItem>
      </FeedbackCountersList>
    </>
  );
};

Statistics.propTypes = {
  goodFeedbacks: PropTypes.number.isRequired,
  neutralFeedbacks: PropTypes.number.isRequired,
  badFeedbacks: PropTypes.number.isRequired,
  totalFeedbacks: PropTypes.number.isRequired,
  positiveFeedbacksPercentage: PropTypes.number.isRequired,
};
