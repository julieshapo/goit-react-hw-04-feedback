import { Component, useState } from 'react';
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setStateUpdate = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    // return good + neutral + bad;

    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  countTotal = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.floor((good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const keys = Object.keys(this.state);
    const totalCount = this.countTotalFeedback();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={keys} onStateUpdate={this.setStateUpdate} />
        </Section>
        <Section title="Statistics">
          {totalCount === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              options={keys}
              statistic={this.state}
              total={totalCount}
              positiveFeedback={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
        <GlobalStyle />
      </Container>
    );
  }
}

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setStateUpdate = option => {
    prevState => ({ [option]: prevState[option] + 1 });
  };

  // const countTotalFeedback = (state) => {

  // }

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onStateUpdate={setStateUpdate} />
      </Section>
      <Section title="Statistics">
        {totalCount === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            options={keys}
            statistic={this.state}
            total={totalCount}
            positiveFeedback={this.countPositiveFeedbackPercentage}
          />
        )}
      </Section>
      <GlobalStyle />
    </Container>
  );
};
