import React, { useState, useEffect } from "react";

import '../App.css';
import Container from './Container';
import Task from './Task';
import Item from './Item';
import MailIcon from '@material-ui/icons/Mail';
import { render } from "@testing-library/react";
import LineTo from 'react-lineto';
import PopOver from "./PopOver";
import Icon from '@material-ui/core/Icon';
function Index() {
  const [client, setClient] = useState({});
  const myFunction = (id) => {
    var original = document.getElementById(id);
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = id + 1515;
    original.parentNode.appendChild(clone);

    /* var itm = document.getElementById("myList2").lastChild;
     var cln = itm.cloneNode(true);
     document.getElementById("myList1").appendChild(cln);*/

  }
  const rendeer = () => {
    return (  <Task id='1' radius={15} color='red' className='task' draggable='true'  > star    </Task>
    );
  }
  return (
    <div className="App">

      <main className='flexbox'>
        <main style={{
          width: '4%',
          backgroundColor: '#325bbd', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 15
        }}>
          <Icon style={{ color: 'white', fontSize: 40, paddingTop: 25 }}>article </ Icon>
          <Icon style={{ color: 'white', fontSize: 40, paddingTop: 15 }}>local_post_office  </ Icon>
          <Icon style={{ color: 'white', fontSize: 40, paddingTop: 15 }}>person </ Icon>
          <Icon style={{ color: 'white', fontSize: 40, paddingTop: 15 }}>add_circle </ Icon>
        </main>
        <Container
          id='2'
          className='container'
        >
          <p style={{ fontSize: 20, color: 'white', alignItems: 'center', display: 'flex', padding: 10 }}>TOOLS</p>
          <Task id='1' couleur1='white'   radius={15} color='red' className='task' draggable='true'  > star    </Task>
          <Task id='71'couleur1='white'  radius={50} color='#5D0AE5' className='task' draggable='true'  > personne </Task>
          <Task id='70' couleur1='white' radius={100} color='#E5210A' className='task' draggable='true'  >web </Task>
          <Task id='73' couleur1='white' radius={0} color='#F79919' className='task' draggable='true'  > delete </Task>
          
        </Container>

        <main id='main' style={{ flex: 5 }}>
         
        </main>
        <Item   />
      </main>

    </div>
  );
}

export default Index;
