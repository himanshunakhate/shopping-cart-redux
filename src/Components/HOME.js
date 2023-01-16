import React from 'react'
import { FaProductHunt } from 'react-icons/fa'
import './styles.css'
import FILTERS from './FILTERS'
import SINGLE from './SINGLE'

const HOME = () => {
  return (
    <div><div className='productContainer'>
      <FILTERS/>
      <SINGLE/>
      </div>
    </div>
  )
}

export default HOME
