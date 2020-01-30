import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './main/Calculator'
import './styles/index.css'

const element = document.getElementById('root')

ReactDOM.render(
    <div>
        <h1>Calculadora</h1>
        <Calculator/>
    </div>
,element)