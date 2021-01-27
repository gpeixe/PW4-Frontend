import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ButtonComponent from './Button';
import { useHistory } from "react-router";


const useStyles = makeStyles((theme) => ({
  buttons: {
    marginRight: theme.spacing(2),
    width: '14ch',
    backgroundColor: 'black',
  },
  Toolbar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      backgroundColor: 'black'
  }
}));

function Menu(){
  const history = useHistory();
  const classes = useStyles();
  return (
  <AppBar position="relative">
    <Toolbar className={classes.Toolbar}>
      <Typography variant="h6" color="inherit" noWrap>
        Lolzinho
      </Typography>
      <div>
        <ButtonComponent className={classes.buttons} variant="contained" color="secondary" value="Home" onClick={()=> history.push('/')} />
        <ButtonComponent className={classes.buttons} variant="contained" color="secondary" value="Champions" onClick={()=> history.push('/Champion')} />
      </div>
    </Toolbar>
  </AppBar>
  )
}
export default Menu;