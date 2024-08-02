import React from 'react'

function SingleItem({ price, type, id, deleteItem, editItem }) {

  const handleDelete = (e) => {
    e.preventDefault();
    const answer = window.confirm(`Delete Subscription to ${type}`);
    if(answer){
      deleteItem(id)
    }
  }

  const handleEdit = (e) => {
    e.preventDefault();
    editItem(id);
  }

  const urlImage = `/src/image/${type}.png`
  return (
    <div className='single-item'>
      <img src={urlImage} alt={`${type} logo`} />
      <h3>{`Precio: ${price}$`}</h3>
      <a href="" onClick={handleDelete}>Delete</a>
      <a href="" onClick={handleEdit} >Edit</a>
    </div>
  );
}

export default SingleItem