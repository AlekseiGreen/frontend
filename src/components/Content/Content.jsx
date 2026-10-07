import React from 'react';
import './Content.css';
import dune2 from '../../assets/dune2.jpg'


class Content extends React.Component{
    render(){
        return <content className='flex-content'>
                <div>Main</div>
                <div><img height='300px' src={dune2} alt="dune2" /></div>
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
    }
}

export default Content;