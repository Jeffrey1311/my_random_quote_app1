
import { useState } from 'react'
import './App.css'
import phrases from "./db/phrases.json"
import { getRandomElement } from './utils/random'
import PhraseContainer from './components/PhraseContainer'

const backgrounds= ["bg1", "bg2", "bg3", "bg4"]

function App() {
  const [phrase, setPhrase] = useState(getRandomElement(phrases))
  const [currentBg, setCurrentBg] = useState(getRandomElement(backgrounds))

  const handleChangePhrase = () => {
    setPhrase(getRandomElement(phrases))
    setCurrentBg(getRandomElement(backgrounds))
    
  }
  
  return (
    <main className={`app ${currentBg}`}>
      <PhraseContainer phrase={phrase} handleChangePhrase={handleChangePhrase}/>
      
    </main>
  )
}

export default App
