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
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    display: 'flex',
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



class ChampionPage extends Component {
  state = { cards: [1,2,3,4,5,6,7,8,9], champion: null }
  async componentDidMount(){
    let championName = this.props.location.pathname.match(/\/Champion\/(.*)$/)[1];
    let champion = await appAPI.getChampion(championName);
    this.setState({
      champion
    });
  }
  render(){
    let {
      champion
    } = this.state;
    const classes = this.props.classes;
    console.log(champion);
    return (
      <React.Fragment>
        <CssBaseline />
        <Menu />
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <h1>Champs</h1>
            </Container>
          </div>
          <Container className={classes.cardGrid} fixed>
            {/* End hero unit */}
            <Grid>
              <Grid item>
                  {champion !== null && <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            src={champion.image}
                            title={champion.name}
                        />
                        <img src={champion.splashImage} alt={champion.name} />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                            {champion.name} - {champion.title} | {champion.tags.join(', ')}
                            </Typography>
                            <Typography variant="h6" component="h6">
                            {champion.lore}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                              Battle Stats
                            </Typography>
                            <Typography variant="h6" component="h6" color="textSecondary">
                              Attack: {champion.info.attack}
                            </Typography>
                            <Typography variant="h6" component="h6" color="textSecondary">
                              Defense: {champion.info.defense}
                            </Typography>
                            <Typography variant="h6" component="h6" color="textSecondary">
                              HP: {champion.stats.hp}
                            </Typography>
                            <Typography variant="h6" component="h6" color="textSecondary">
                              Difficulty: {champion.info.difficulty}
                            </Typography>
                        </CardContent>
                        </Card>}
                    </Grid>
                </Grid>
          </Container>
          <Container>
            <Grid>
              
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    );
  }
}
export default (withStyles(useStyles)(withRouter(ChampionPage)));