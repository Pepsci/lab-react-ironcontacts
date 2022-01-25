import React from 'react';
import "./contacList.css"

export const ContactList = (props) => {




    let wonOscar= ""
    if(props.item.wonOscar === true) wonOscar = "🏆"
    let wonEmmy = ""
    if(props.item.wonEmmy === true) wonEmmy = "🏆"

  return (
        <>
              <tr key={props.item.name}>
                  <td><img src={props.item.pictureUrl} alt={props.item.name} /></td>
                  <td>{props.item.name}</td>
                  <td>{props.item.popularity}</td>
                  <td>{wonOscar}</td>
                  <td>{wonEmmy}</td>
                  {/* <td><button onClick={handleDelete(e)}>Delete</button></td> */}
              </tr>
        </>
  );
};

export default ContactList