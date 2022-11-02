import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import finger from './dedos.jpg'

export default function Start() {
  return (
    <div className='main'>
      <div className='img-container'>
        <img alt='dedos' src={finger}></img>
      </div>
      <section className='showcase'>
        <div className='content'>
          <div>
            <h1 className='title'>THE BEST APP TO TRAVEL EVER</h1>
          </div>
          <div>
            <Link to='/home' >
              <button className='button'>
                DO IT!
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}