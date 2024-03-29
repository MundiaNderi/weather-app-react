import './App.css'
import Weather from './Weather'

function App() {

  return (
    <>
    <div className='App'>
      <div className='container'>
        <Weather defaultCity="Nairobi" /> 
        <footer>
          This project was coded by {" "}
          <a href=" https://symphonious-frangipane-249b25.netlify.app" target='_blank'>Serah Nderi</a> and is {" "}
          <a href=" https://github.com/MundiaNderi/weather-app-react" target='_blank'>Open-sourced on Github</a>
        </footer>
      </div>
    </div>
    </>
  )
}

export default App
