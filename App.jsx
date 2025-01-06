import React, {useState} from "react";
import "./App.css";
import Row from "./Row.jsx";

const App = () => {
  const targetWord = "REACT";
  const maxAttemps = 6;
  
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value.toUpperCase())
  };

  const handleGuesss = () => {
    if (currentGuess.length !== 5){
      return;
    } 

    const updatedGuesses = [...guesses, currentGuess];
    setGuesses(updatedGuesses);

    if (currentGuess === targetWord || updatedGuesses.length >= maxAttemps){
      setIsGameOver(true);
    } 
  };


  return (
    <div className="main-container">
      <h1>Wordle</h1>
      {guesses.map((guess, index) => (
        <Row key={index} guess={guess} targetWord={targetWord}/>
      ))}
      {!isGameOver && (
        <>
         <input 
          onChange = {handleInputChange} 
          maxLength={targetWord.length} 
          placeholder = "Enter your guess"
         />
         <button onClick={handleGuesss}>Guess</button>
        </>
      )}
      {isGameOver && currentGuess != targetWord && (
        <p>
        {`Game over! The word was: ${targetWord}`}
        </p>
      )}
    </div>
  );
};

export default App;
