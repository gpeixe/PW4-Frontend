import React, { useState } from 'react';
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
  // declaração do estado do valor da SearchBar e uma função que altera esse state
  const [ searchState, setState ] = useState();
  function searchForSummoner(name){
    if(name) {
      history.push(`/Summoner/${name}`);
      console.log(name)
    }
  }

  return (
    <FormControl className={classes.root}>
      <OutlinedInput id="outlined-adornment-weight" placeholder="Summoner's Name" autoFocus={true} 
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="Search"
            edge="end"
            onClick={() => searchForSummoner(searchState)} // searchState vai estar atualizado com o último valor digitado
          >
          <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
      onChange={(e) => setState(e.target.value)} // atualiza o searchState
      onKeyDown={(e) => {
        if(e.key === 'Enter'){
          searchForSummoner(searchState)
        }
      }}
      />
      </FormControl>
  );
}