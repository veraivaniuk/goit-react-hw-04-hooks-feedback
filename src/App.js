import { useState} from 'react';
import Container from 'components/Container/Container';
import Buttons from './components/Buttons/Buttons';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import './App.css';


function App() {
  
  const [good, setGood] = useState(0);
  const [neutral, setNnutral] = useState(0);
  const [bad, setBad] = useState(0);
  const nameButtons = ['good', 'neutral', 'bad'];

  const handleIncrement = event => {
    const value = event.target.name;

    switch (value) {
      case 'good':
        setGood((prevState) => Number(prevState) + 1);
        break;
      case 'neutral':
        setNnutral((prevState) => Number(prevState) + 1);
        break;
      case 'bad':
        setBad((prevState) => Number(prevState) + 1);
        break;
      default:
        return;
    }
  };

   const countTotalFeedback= ()=> {
    const value = good + neutral + bad;
    return value;
   }
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  }

  
  return (
      <Container>
        <Section title="Please leave your feedback">
          <Buttons stateName={nameButtons} func={handleIncrement} />
        </Section>
        <Section title="Statistics">
          {total === 0 && <Notification message="No feedback given" />}
          {total > 0 && (
            <Statistics
            stateName={{ good, neutral, bad }}
              func1={countTotalFeedback()}
              func2={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );

}

export default App;
