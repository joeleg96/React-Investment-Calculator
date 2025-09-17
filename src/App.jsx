import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results";
import { useState } from 'react';

function App() {
   const[userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const inputIsValid = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            };
        });
    }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange}/>
      {!inputIsValid && <p className="center">Please enter a value greater than 0 for duration.</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
