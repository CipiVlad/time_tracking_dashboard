import './scss/App.scss'
import { useEffect, useState } from 'react'
import dataBase from './assets/data.json'
function App() {

  const [userData, setUserData] = useState([])

  useEffect(() => {
    setUserData(dataBase as [])
  }, [])

  return (
    <div className="App">

      <header className="App-header">
        <h1>Time Tracking Dashboard</h1>
        {
          userData && userData.map((item: any, index: number) => {
            return (
              <div key={index}>
                <p>{item.title}</p>
                <p>{item.timeframes.daily.current}hrs</p>
                <p>{item.timeframes.weekly.current}hrs</p>
                <p>{item.timeframes.monthly.current}hrs</p>
              </div>
            )
          })
        }
      </header>
    </div>
  )
}

export default App
