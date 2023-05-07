import { useState } from 'react';
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = { good, neutral, bad };
  const keys = Object.keys(feedbacks);

  const setStateUpdate = type => {
    switch (type) {
      case 'good':
        return setGood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
      case 'bad':
        return setBad(prevState => prevState + 1);
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const values = Object.values(feedbacks);
    return values.reduce((acc, value) => acc + value, 0);
  };

  const totalFeedback = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / totalFeedback) * 100) || 0;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onStateUpdate={setStateUpdate} />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            options={keys}
            statistic={feedbacks}
            total={totalFeedback}
            positiveFeedback={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
      <GlobalStyle />
    </Container>
  );
};
