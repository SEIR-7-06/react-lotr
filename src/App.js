import Movie from './components/Movie'
import './App.css'

function App() {
  return (
    <div className="App" id="">
      <Movie 
        title="The Fellowship of the Ring" 
        hours={2} 
        minutes={58} 
      />
      <Movie 
      title="The Two Towers" 
      hours={2} 
      minutes={59} 
      />
      <Movie 
      title="The Return of the King" 
      hours={3} 
      minutes={21} 
      />
    </div>
  )
}

export default App;