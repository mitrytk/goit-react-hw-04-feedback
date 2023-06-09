import { useState } from "react";

import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)

  const grade = {
    good,
    neutral,
    bad,
  }

  const onLeaveFeedback = (grade) => {
    switch (grade) {
      case 'good':
        setGood(prev => prev + 1);
        break;
    
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1)
        break;
    
      default:
        return;
    }
  } 

  const countTotalFeedback = () => {
    return (good + neutral + bad);
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
  
    return (good/total * 100).toFixed(0);
  }

  return (
    <>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={Object.keys(grade)} onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
      </Section>

      <Section title='Statistics'>
        { countTotalFeedback() === 0 
        ? (<Notification message="There is no feedback"></Notification>)
        : (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} />)
        }
      </Section>
    </>
  );
} 