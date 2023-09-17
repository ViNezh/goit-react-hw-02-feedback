import { Component } from 'react';
import css from './App.module.css';

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

  handleClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleClickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleClickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = Math.ceil(
      this.countPositiveFeedbackPercentage()
    );
    return (
      <div className={css.container}>
        <h2 className={css.title}>Please leave feedback</h2>
        <div className={css.buttons}>
          <button onClick={this.handleClickGood}>Good</button>
          <button onClick={this.handleClickNeutral}>Neutral</button>
          <button onClick={this.handleClickBad}>Bad</button>
        </div>
        <div className={css.statistic}>
          <h2 className={css.titleStat}>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </div>
      </div>
    );
  }
}

export default App;
