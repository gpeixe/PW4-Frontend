import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '250ch',
    },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}));



export default function SearchBar() {
  const classes = useStyles();
  const history = useHistory();
  function searchForSummoner(name){
    history.push(`/Summoner/${name}`);
  }
  return (
    <form>
    <FormControl className={classes.root}>
      <OutlinedInput id="outlined-adornment-weight" placeholder="Summoner's Name"
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="Search"
            edge="end"
            onClick={(props) => console.log(props)}
          >
          <SearchIcon />
          </IconButton>
        </InputAdornment>
      } 
      />
      </FormControl>
      </form>
  );
}