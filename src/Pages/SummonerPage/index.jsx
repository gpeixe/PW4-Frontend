import React, { Component, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Menu from '../../Components/Menu';
import { withRouter } from 'react-router';
import appAPI from '../../API/config';
import MainCard from './Components/MainCard';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';


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
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9,
    width: '25%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
}));

class SummonerPage extends Component {
  state = { summoner: null }
  async componentDidMount(){
    const name = this.props.location.pathname.match(/\/Summoner\/(.*)$/)[1];
    let summoner = await appAPI.getSummoner(name);
    this.setState({
      summoner
    });
    console.log(summoner)
  }
  render(){
    const {
      summoner
    } = this.state;
    const classes = this.props.classes;
    return (
      <React.Fragment>
        <CssBaseline />
        <Menu />
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <h1>Página de Summoner</h1>
            </Container>
          </div>
          <Container className={classes.cardGrid} fixed>
            {/* End hero unit */}
            <Grid>
              <Grid item xs={12} md={6}>
        {summoner !== null && <Card className={classes.card}>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={summoner.summoner.iconImage} title={summoner.summoner.name} />
          </Hidden>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {summoner.summoner.name}
              </Typography>
              <Typography variant="subtitle1" color="textPrimary">
                Ranked Solo: {summoner.soloQueue.tier + ' ' + summoner.soloQueue.rank}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Wins: {summoner.soloQueue.wins}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Losses: {summoner.soloQueue.losses}
              </Typography>
              
              <Typography variant="subtitle1" color="textPrimary">
                Ranked Flex: {summoner.flexQueue.tier + ' ' + summoner.flexQueue.rank}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Wins: {summoner.flexQueue.wins}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Losses: {summoner.flexQueue.losses}
              </Typography>
            </CardContent>
          </div>
        </Card>}
    </Grid>
            </Grid>
          </Container>
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
}
export default (withStyles(useStyles)(withRouter(SummonerPage)));