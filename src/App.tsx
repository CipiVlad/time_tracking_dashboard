import './scss/App.scss'
import { useEffect, useState } from 'react'
function App() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await fetch('http://localhost:5173/src/assets/data.json');
    const data = await response.json();
    setData(data)
  }

  console.log(data);

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">

      <header className="App-header">
        <h1>Time Tracking Dashboard</h1>
        {
          data.map((item: any, index: number) => {
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
