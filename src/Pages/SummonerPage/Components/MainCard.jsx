import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function MainCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
        <Card className={classes.card}>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={props.image} title={props.imageTitle} />
          </Hidden>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {props.title}
              </Typography>
              <Typography variant="subtitle1" color="textPrimary">
                Ranked Solo: {props.soloRank}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Wins: {props.soloWins}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Losses: {props.soloLosses}
              </Typography>
              
              <Typography variant="subtitle1" color="textPrimary">
                Ranked Flex: {props.flexRank}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Wins: {props.flexWins}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Losses: {props.flexLosses}
              </Typography>
            </CardContent>
          </div>
        </Card>
    </Grid>
  );
}