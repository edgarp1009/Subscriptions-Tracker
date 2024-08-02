import React, { useEffect, useState } from 'react'

function Balance({count, subs, spent, setSpent}) {

  const updateBalance = () => {
    const spent = subs.reduce((total, item) => Number(item.price) + total, 0)
    setSpent(spent);
    console.log(spent)
  }

  useEffect(() => {
    updateBalance();
  }, [subs]);

  return (
    <div className='balance'>
      <h3>{`Budget: ${count}$`}</h3>
      <h3>{`Available: ${count - spent}$`}</h3>
      <h3>{`Spent: ${spent}$`}</h3>
    </div>
  )
}

export default Balance