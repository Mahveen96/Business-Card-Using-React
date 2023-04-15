import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

const Card = (props) => {
  return (
    <main>
      <div>
        <img src={props.img} alt="girl" className="girl-img" />
        <div className="card-content">
          <h1>{props.name}</h1>
          <h2>{props.title}</h2>
          <a href="#">{props.website}</a>
          <button>
            <FaEnvelope
              style={{
                color: '#1e1f26',
                paddingRight: '8px',
                width: '24px',
                height: '24px',
              }}
            />{' '}
            Email
          </button>
          <section>
          <article className='about'>
            <h3>About</h3>
            <p>{props.about}</p>
          </article>
          <article className='interest'>
            <h3>Interest</h3>
            <p>{props.interest}</p>
          </article>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Card
