import React, { Component, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Menu from '../../Components/Menu';
import { withRouter } from 'react-router';
import { ButtonBase, CardActionArea } from '@material-ui/core';
import appAPI from '../../API/config';


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
    padding: theme.spacing(8, 0, 6),
    textAlign: 'center'
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
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
}));



class AllChampionsPage extends Component {
  state = { champions: [] }
  async componentDidMount(){
    let champions = await appAPI.getAllChampions();
    this.setState({
      champions
    });
  }
  render(){
    const {
      champions
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
                <h1>Página de Champions</h1>
            </Container>
          </div>
          <Container className={classes.cardGrid} fixed>
            {/* End hero unit */}
            <Grid container spacing={4}>
              {champions.map((champ) => (
                <Grid item key={champ.key} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <ButtonBase onClick={() => this.props.history.push(`${this.props.location.pathname}/${champ.id}`)}>
                      <CardActionArea>
                        <CardMedia
                            className={classes.cardMedia}
                            src={champ.image}
                            title={champ.name}
                        />
                        <img src={champ.image} alt={champ.name} />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                            {champ.name}
                            </Typography>
                            <Typography variant="h6" component="h6">
                            {champ.title}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {champ.tags.map((tag) => (
                              <Button size="small" color="primary">
                            {tag}
                            </Button>
                            ))}
                        </CardActions>
                      </CardActionArea>
                  </ButtonBase>
                  </Card>
                </Grid>
              ))}
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
export default (withStyles(useStyles)(withRouter(AllChampionsPage)));