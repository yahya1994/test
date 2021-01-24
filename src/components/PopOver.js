import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Tooltip } from "@material-ui/core/";
import SimpleModal from './SimpleModal';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));
export default function PopOver(props) {
  const classes = useStyles();
  const classess = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div> <Tooltip
      title="click to update"
    >
      <Button onClick={handleClick}>
        {props.children}
      </Button>
    </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography} >
          <SimpleModal icone={props.iconName} color1={props.couleur1}   color={props.couleur} radiuss={props.radius} Colorr={props.Color} />
        </Typography>
      </Popover>
    </div>
  );
}
