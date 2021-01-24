import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Input, Icon } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [radius, setRadius] = React.useState(50);
  const [color, setColor] = React.useState(props.color);
  const [color1, setColor1] = React.useState(props.color1);
  const [icon, setIcon] = React.useState(props.icone); 

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  const body = (
    <div style={modalStyle} className={classes.paper}>
        <p>
        icon name :   <Input   onChange={event => {
          const { value } = event.target;
          setIcon(value);
        }} value={icon}> </Input>
      </p>
      <p>
       background  color :   <Input onChange={event => {
          const { value } = event.target;
          setColor(value);
        }} value={color}> </Input>
      </p>
      <p>
        color :   <Input onChange={event => {
          const { value } = event.target;
          setColor1(value);
        }} value={color1}> </Input>
      </p>
      <p id="simple-modal-description">
        format : <br/>
      <Icon   onClick={() => props.radiuss(0,color,icon,color1)}>crop_3_2</Icon>
      <Icon onClick={() => props.radiuss(50,color,icon,color1)}>panorama_fish_eye</Icon>
       <Icon onClick={() => props.radiuss(15,color,icon,color1)}>crop_square</Icon>
      </p>   </div>   );
  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Edit format
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
