import './App.css'
import Cards from './cards'

function App() {
  return (
    <div className="App">
      <h1
        style={{
          width: '100%',
          color: 'black',
          padding: '15px 0',
          textAlign: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          fontSize: '50px',
          fontWeight: 'bold',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        }}
      >
        Azkar Website
      </h1>
      <Cards />
    </div>
  )
}

export default App
