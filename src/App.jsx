import { useState } from 'react'
import './App.css'

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
    <div style={{ padding: '20px' }}>
      <h1>Тест подключения к API</h1>
      <button onClick={testAPI}>
        Отправить POST запрос на /api/user
      </button>
      <pre style={{ 
        background: '#140808', 
        padding: '10px', 
        marginTop: '20px',
        borderRadius: '5px'
      }}>
        {result || 'Нажмите кнопку для теста'}
      </pre>
    </div>
  )
}

export default App