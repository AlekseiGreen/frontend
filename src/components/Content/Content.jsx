import React from 'react';
import './Content.css';
// import dune2 from '../../assets/dune2.jpg'


function Content() {

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

    return( 
        <content className='flex-content'>
            <div>Main</div>
            <div><img height='300px' src="" alt="dune2" /></div>
            <div>Main</div>
            <div>Main</div>
            <div>Main</div>
            <div>Main</div>
            <div>Main</div>
            <div>Main</div>
            <div>Main</div>
            <div>Main</div>
            <div>Main</div>
            <div>Main</div>
            <div>Main</div>
            <div>Main</div>
            <div>Main</div>
        </content>
    )
}

export default Content;