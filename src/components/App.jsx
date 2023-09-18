import { Component } from 'react';

import { Section } from './Section/section';
import { FeedbackOptions } from './Feedback/feedback';
import { Statistics } from './Statictic/statistic';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : (good / total) * 100;
  };

  handleClick = keyState => {
    this.setState(prevState => ({ [keyState]: prevState[keyState] + 1 }));
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = Math.ceil(
      this.countPositiveFeedbackPercentage()
    );
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}

export default App;
