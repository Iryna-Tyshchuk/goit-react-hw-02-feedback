import { Component } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback(obj) {
    return Object.values(obj).reduce((acc, el) => acc + el, 0);
  }
  countPositiveFeedbackPercentage(total, good) {
    return `${Math.round((good / total) * 100)}%`;
  }
  onLeaveFeedback = str => {
    this.setState(prevState => ({
      [str]: prevState[str] + 1,
    }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state);
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(
      totalFeedback,
      good
    );
    return (
      <>
        <Section title="Please leave your feedback ">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {totalFeedback > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Section>
            <Notification message="There is no feedback" />
          </Section>
        )}

        <GlobalStyle />
      </>
    );
  }
}
