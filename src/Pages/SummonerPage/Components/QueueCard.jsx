import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignContent: 'center'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 500,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  }
}));

export default function MainCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://static.wikia.nocookie.net/leagueoflegends/images/9/96/Season_2019_-_Gold_1.png/revision/latest/top-crop/width/300/height/300?cb=20181229234920"
        title={props.title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h2" variant="h2">
            Solo Queue
          </Typography>
          <Typography component="h3" variant="h3">
            Rank: GOLD II
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Points: 152
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Wins: 52
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Losses: 53
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          {props.description}
        </div>
      </div>
    </Card>
  );
}
