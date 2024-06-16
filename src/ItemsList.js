import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from 'react';

const ItemsList =
    ({ items, handleShow, deleteTODO }) => {

        const [selectedPerson, setSelectedPerson] = useState(null);

  const handleClick = (person) => {
    if (selectedPerson && selectedPerson.id === person.id) {
        setSelectedPerson(null); // Hide details if clicking the same item again
      } else {
        setSelectedPerson(person); // Show details of clicked item
      }
    
  };


        return (
          <div >
                       {selectedPerson && (
                <div id="details-box">
                  <h3>Details</h3>
                  <p><strong>Name:</strong> {selectedPerson.id}</p>
                  <p><strong>Email:</strong> {selectedPerson.item}</p>
                  </div>
      )}
            <ul>
                {items.map((item) => (
                    <li className='li' key={item.id} onClick={()=>handleClick(item)}>
                        {/* <input
                            type='checkbox'
                            id='myCheck'
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked} /> */}
                        <label
                            // style={(item.checked) ? { textDecoration: 'line-through', color: 'red' } : null}
                        >{item.item}</label>
                        <FaTrashAlt
                            role='button'
                            tabIndex="0"
                            onClick={() => deleteTODO(item.id)}
                        />
                    </li>
                    
                )
                )}
      
            </ul>
            {/* {selectedPerson && (
                <div id="details-boxs">
                  <h3>Details</h3>
                  <p><strong>Name:</strong> {selectedPerson.id}</p>
                  <p><strong>Email:</strong> {selectedPerson.item}</p>
                  </div>
      )} */}
    </div>
  );
};
    
    
export default ItemsList