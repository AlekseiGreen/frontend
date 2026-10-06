import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';
import Footer from './components/Footer/Footer.jsx';

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
    <div className='app-wrapper'>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  )
}

export default App