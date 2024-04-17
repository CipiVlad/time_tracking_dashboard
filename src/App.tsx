import './scss/App.scss'
import { useEffect, useState } from 'react'
import { data } from './assets/data'
function App() {
  const [timeframes, setTimeframes] = useState(data)

  console.log(timeframes);

  return (
    <div className="App">
      <h1>{timeframes[0].title}</h1>
    </div>
  )
}

export default App
