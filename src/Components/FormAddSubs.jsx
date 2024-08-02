import React, { useState } from 'react'

function FormAddSubs({ setPrice, setType, type, price, setSubs, subs, editId, setEditId, spent, count }) {
  const [error, setError] = useState(false);
  const [errorMoney, setErrorMoney] = useState(false);

  const handleSubs = e => {
    e.preventDefault();
    if(price == "" || price < 0 || type == ""){
      setError(true);
      return;
    }
    if(count - spent < Number(price)){
      setErrorMoney(true);
      return;
    }
    setError(false);
    if(editId != "") {
      const newSubs = subs.map(item => {
        if(item.id == editId){
          item.type = type;
          item.price = price;
        }
        return item;
      })
      setSubs(newSubs);
      setEditId("");
    } else {
      const data = {
        type: type,
        price: price,
        id: Date.now()
      }
      setSubs([...subs, data]);
    }
    setPrice("");
    setType("");
  }

  return (
    <div className='add-subscription'>
      <h3>Add Subscription</h3>
      <form onSubmit={ handleSubs }>
        <p>Services</p>
        <select name="Subscriptions" id="" value={type} onChange={e => setType(e.target.value)}>
          <option value="">Choose one suscription</option>
          <option value="netflix">Netflix</option>
          <option value="disneyPLus">Disney PLus</option>
          <option value="hboMax">HBO Max</option>
          <option value="starPlus">Star Plus</option>
          <option value="primeVideo">Prime Video</option>
          <option value="spotify">Spotify</option>
          <option value="appleTv">Apple</option>
        </select>
        <p>Quantity</p>
        <input type="number" name="" id="" value={price} placeholder='20$' onChange={e => setPrice(e.target.value)} />
        {editId == "" ? 
        <input type="submit" name="" id="" value="Add" /> 
        : <input type="submit" name="" id="" value="Save Changes" /> }
      </form>
      {error? <p className='error'>Invalid Champs</p> : null}
      {errorMoney? <p className='error'>Not enough money</p> : null}
    </div>
  )
}

export default FormAddSubs