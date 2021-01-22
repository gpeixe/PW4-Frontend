import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Menu from '../GeneralComponents/Menu';
import SearchBar from './Components/SearchBar';
import { withRouter } from 'react-router';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Alterar depois se quiser colocar alguma coisa
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  searchBar: {
    backgroundColor: theme.palette.background.default,
    //padding: theme.spacing(8, 0, 6),
    position: 'fixed',
    bottom: '50%',
    left: 0,
    right: 0
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0, 
  }
}));

function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Menu />
      <main>
        {/* Hero unit */}
        <div className={classes.searchBar}>
          <Container maxWidth="sm">
          <SearchBar align="center" />
          </Container>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
export default withRouter(HomePage);