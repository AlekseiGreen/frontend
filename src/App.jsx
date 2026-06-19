import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';

function App() {
  const [result, setResult] = useState('')

  const testAPI = async () => {
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'gor',
          surname: 'gorov'
        }),
      })
      
      const data = await response.json()
      setResult(JSON.stringify(data, null, 2))
    } catch (error) {
      setResult('Ошибка: ' + error.message)
    }
  }

  return (
    <>
    <Header></Header>
    </>
  )
}

export default App