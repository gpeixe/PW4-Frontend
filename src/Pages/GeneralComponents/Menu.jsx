import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ButtonComponent from '../HomePage/Components/Button';
import { useHistory } from "react-router";


const useStyles = makeStyles((theme) => ({
  buttons: {
    marginRight: theme.spacing(2),

  },
  Toolbar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
  }
}));

function Menu(){
  const history = useHistory();
  const classes = useStyles();
  return (
  <AppBar position="relative">
    <Toolbar className={classes.Toolbar}>
      <Typography variant="h6" color="inherit" noWrap>
        Churiço nome do programa
      </Typography>
      <div>
        <ButtonComponent className={classes.buttons} variant="contained" color="secondary" value="Champion" onClick={()=> history.push('/Champion')} />
        <ButtonComponent className={classes.buttons} variant="contained" color="secondary" value="Summoner" onClick={()=> history.push('/Summoner')} />
        <ButtonComponent className={classes.buttons} variant="contained" color="secondary" value="Teste" onClick={()=> history.push('/Champion')} />
      </div>
    </Toolbar>
  </AppBar>
  )
}
export default Menu;