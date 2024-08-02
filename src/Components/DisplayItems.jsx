import React from 'react'
import SingleItem from './SingleItem'


function DisplayItems({subs, deleteItem, editItem}) {
  return (
    <>
      <h2>Subscriptions</h2>
      {
        subs.map(i => (
          < SingleItem
          key={i.id} 
          id={i.id}
          price={i.price}
          type={i.type}
          deleteItem={deleteItem}
          editItem={editItem}
          />
        ))
      }
    </>
  )
}

export default DisplayItems