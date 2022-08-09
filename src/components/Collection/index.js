import React from 'react'
import './style.css'
import ButtonCircle from '../ButtonCircle'
import Card from '../Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function Collection({ title, data }) {
  return (
    <>
      <h2 className='collection-title'>In Water.</h2>
      <div className='collection-container'>
        <div className='collection-content'>
          {data.map(({ className, title, id, src, alt, avg_color }) => (
            <div className='collection-card' key={id}>
              <Card className={className} title={title} id={id} src={src} alt={alt} avg_color={avg_color} />
            </div>
          ))}
        </div>
        <div className='scroll-btns-container'>
          <ButtonCircle>
            <FontAwesomeIcon icon={faAngleLeft} />
          </ButtonCircle>
          <ButtonCircle>
            <FontAwesomeIcon icon={faAngleRight} />
          </ButtonCircle>
        </div>
      </div>
    </>
  )
}