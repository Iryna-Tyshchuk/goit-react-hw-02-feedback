import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section';

import { SectionTitle } from './SectionTitle';
import { StatisticText } from './StatisticText';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';

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
        <Section px={5} mt={5}>
          <SectionTitle>Please leave your feedback </SectionTitle>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {totalFeedback > 0 ? (
          <Section px={5} mt={5}>
            <SectionTitle>Statistics </SectionTitle>
            <StatisticText>Good: {good}</StatisticText>
            <StatisticText>Neutral: {neutral}</StatisticText>
            <StatisticText>Bad: {bad}</StatisticText>
            <StatisticText>Total: {totalFeedback}</StatisticText>
            <StatisticText>
              Positive feedback: {positiveFeedbackPercentage}
            </StatisticText>
          </Section>
        ) : (
          <Section px={5} mt={5}>
            <Notification message="There is no feedback" />
          </Section>
        )}

        <GlobalStyle />
      </>
    );
  }
}

// <Section title="">
// <Statistics good={} neutral={} bad={} total={} positivePercentage={}/></Section>
// <Section title="">
// </Section>
