import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onAddFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
    // switch (name) {
    //   case 'good':
    //     this.setState(prevState => ({ good: prevState.good + 1 }));
    //     break;
    //   case 'neutral':
    //     this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    //     break;
    //   case 'bad':
    //     this.setState(prevState => ({ bad: prevState.bad + 1 }));
    //     break;

    //   default:
    //     return;
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please, leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onAddFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              goodFeedbacks={good}
              neutralFeedbacks={neutral}
              badFeedbacks={bad}
              totalFeedbacks={total}
              positiveFeedbacksPercentage={positivePercentage}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }
}
