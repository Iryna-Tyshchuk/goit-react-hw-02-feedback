import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Button } from './Button';
import { SectionTitle } from './SectionTitle';
import { StatisticText } from './StatisticText';

export class App extends Component {
  state = {
    good: 3,
    neutral: 4,
    bad: 5,
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Box as="main" px={4}>
        <Box as="section" px={4}>
          <SectionTitle>Please leave your feedback </SectionTitle>
          <Button>Good</Button>
          <Button>Neutral</Button>
          <Button>Bad</Button>
        </Box>
        <Box as="section" px={4}>
          <SectionTitle>Statistics </SectionTitle>
          <StatisticText>Good: {good}</StatisticText>
          <StatisticText>Neutral: {neutral}</StatisticText>
          <StatisticText>Bad: {bad}</StatisticText>
          <StatisticText>Total:</StatisticText>
          <StatisticText>Positive feedback:</StatisticText>
        </Box>
        <GlobalStyle />
      </Box>
    );
  }
}

// <Section title="">
// <Statistics good={} neutral={} bad={} total={} positivePercentage={}/></Section>
// <Section title="">
// <FeedbackOptions options={} onLeaveFeedback={}/></Section>
