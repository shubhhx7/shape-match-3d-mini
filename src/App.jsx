import { useState, useCallback } from 'react';
import HomeScreen from './components/HomeScreen';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';
import { generateRounds } from './data/shapes';
import { useSound } from './hooks/useSound';

export default function App() {
  const [gameState, setGameState] = useState('home');
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [rounds, setRounds] = useState([]);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const sound = useSound(soundEnabled);

  const startGame = useCallback(() => {
    sound.playClick();
    setRounds(generateRounds());
    setCurrentRound(0);
    setScore(0);
    setGameState('playing');
  }, [sound]);

  const handleCorrect = useCallback(() => {
    sound.playCorrect();
    setScore(prev => prev + 1);
  }, [sound]);

  const handleWrong = useCallback(() => {
    sound.playWrong();
  }, [sound]);

  const handleNextRound = useCallback(() => {
    if (currentRound >= 4) {
      setTimeout(() => {
        sound.playComplete();
        setGameState('completed');
      }, 800);
    } else {
      setCurrentRound(prev => prev + 1);
    }
  }, [currentRound, sound]);

  const handlePlayAgain = useCallback(() => {
    sound.playClick();
    setRounds(generateRounds());
    setCurrentRound(0);
    setScore(0);
    setGameState('playing');
  }, [sound]);

  const handleHome = useCallback(() => {
    sound.playClick();
    setGameState('home');
  }, [sound]);

  const toggleSound = useCallback(() => {
    setSoundEnabled(prev => !prev);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      {gameState === 'home' && (
        <HomeScreen
          onStart={startGame}
          soundEnabled={soundEnabled}
          onToggleSound={toggleSound}
        />
      )}
{gameState === 'playing' && rounds.length > 0 && (
        <GameScreen
          round={rounds[currentRound]}
          roundNumber={currentRound + 1}
          totalRounds={5}
          score={score}
          soundEnabled={soundEnabled}
          onToggleSound={toggleSound}
          onCorrect={handleCorrect}
          onWrong={handleWrong}
          onNextRound={handleNextRound}
        />
      )}
      {gameState === 'completed' && (
        <ResultScreen
          score={score}
          totalRounds={5}
          onPlayAgain={handlePlayAgain}
          onHome={handleHome}
          soundEnabled={soundEnabled}
          onToggleSound={toggleSound}
        />
      )}
    </div>
  );
}
