import React from 'react'
import Players from './Players'
import {data} from './PlayersData'

function PlayersListe() {
  return (
    <div>
        <div className='row'>
          {
              data.map((input , i) => (
                  <div   className='col-md-3 col-sm-12 my-3' key={i} >
                      <Players  input={input} />
                  </div>
                  
              ))
          }
      </div>
    </div>
  )
}

export default PlayersListe
