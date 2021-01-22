import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Menu from '../GeneralComponents/Menu';
import { withRouter } from 'react-router';
import { CardActionArea } from '@material-ui/core';
import axios from 'axios';


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



function ChampionsPage() {
  /*
  const [champions, setChampions] = useState(null);
  const apiURL = 'http://localhost:3000/Champion';

  const fetchData = async () => {
  const response = await axios.get(apiURL);
  setChampions(response.data);
}
*/
  const cards = [1,2,3,4,5,6,7,8,9];
  const classes = useStyles();

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
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                        Heading
                        </Typography>
                        <Typography>
                        This is a media card. You can use this section to describe the content.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                        View
                        </Button>
                    </CardActions>
                  </CardActionArea>
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
export default withRouter(ChampionsPage);