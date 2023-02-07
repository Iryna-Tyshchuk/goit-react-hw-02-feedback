import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';

import { SectionTitle } from './SectionTitle';
import { StatisticText } from './StatisticText';
import { FeedbackOptions } from './FeedbackOptions';

export class App extends Component {
  state = {
    good: 3,
    neutral: 4,
    bad: 5,
  };
  countTotalFeedback(obj) {
    return Object.values(obj).reduce((acc, el) => acc + el, 0);
  }
  countPositiveFeedbackPercentage(total, good) {
    return `${(good / total) * 100}%`;
  }
  onLeaveFeedback = e => {
    // this.setState(prevState => ({
    //   rang: prevState.rang + 1,
    // }));
    console.log(e);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state);
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(
      totalFeedback,
      good
    );
    return (
      <Box as="main" px={4}>
        <Box as="section" px={4}>
          <SectionTitle>Please leave your feedback </SectionTitle>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Box>
        <Box as="section" px={4}>
          <SectionTitle>Statistics </SectionTitle>
          <StatisticText>Good: {good}</StatisticText>
          <StatisticText>Neutral: {neutral}</StatisticText>
          <StatisticText>Bad: {bad}</StatisticText>
          <StatisticText>Total: {totalFeedback}</StatisticText>
          <StatisticText>
            Positive feedback: {positiveFeedbackPercentage}
          </StatisticText>
        </Box>
        <GlobalStyle />
      </Box>
    );
  }
}

// <Section title="">
// <Statistics good={} neutral={} bad={} total={} positivePercentage={}/></Section>
// <Section title="">
// </Section>
