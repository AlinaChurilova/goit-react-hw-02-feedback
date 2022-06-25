import React, { Component } from 'react';
import Section from './Feedback/Section';
import Statistics from './Feedback/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from './Feedback/Notification';
import s from './Feedback/Feedback.module.css';


class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0,
  };
  
  onLeaveFeedbackIncrease = (option) => {
       this.setState(prevState => {
          return {
                [option]: prevState[option] + 1,
            };
        });
   };

  
  countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad; 
        return total;
  };
  countPositiveFeedbackPercentage() {
        const { good } = this.state;
        const positive = Math.floor(good / this.countTotalFeedback() * 100); 
        return positive;
  };
  
  
  render() {

    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    
    return (
      <div className={s.Container}>
       <Section title="Please leave feedback">
          <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedbackIncrease}
        /> 
        </Section>
        
        <Section title="Statistics">
          {this.countTotalFeedback() ? 
            <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={total !== 0 && positivePercentage}
            /> : <Notification message="There is no feedback!"/>}
                
          </Section>
      </div>
    )
  }
}

export default App;