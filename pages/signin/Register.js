import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import Layout from '../layout'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import { Link, Router } from '../../routes'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
    padding: theme.spacing.unit * 2,
  },
  title:{
    minWidth: '20rem'
  },
  card: {
    maxWidth: 345,
    marginTop: theme.spacing.unit *3,
  },
  media: {
    minHeight: '20rem',
    boxShadow: '#FFF 0rem -3rem 3rem inset',
  },
  CardContentText:{
    marginTop: '17rem'
  },
  inputGrid:{
    padding: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit,
  },
  CardActionArea:{
    position: 'relative'
  },
  CardContent:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  Button:{
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  }
});
class login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12}>
          <Card className={classes.card} >
            <CardActionArea className={classes.CardActionArea}>
              <CardMedia
                className={classes.media}
                image="/static/LY7F7EM.jpg"
                title="TEST"
              />
              <CardContent className={classes.CardContent} >
                <Typography className={classes.CardContentText} variant="h5" component="h2" align="center">
                    REGISTER
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Grid container className={classes.inputGrid} >
                  <Grid item sm={12}>
                      <TextField label="username" className={classes.Button} fullWidth />
                  </Grid>
                  <Grid item sm={12}>
                      <TextField label="password" className={classes.Button} fullWidth />
                  </Grid>
                  <Grid item sm={12}>
                      <TextField label="email" className={classes.Button} fullWidth />
                  </Grid>
                  <Grid item sm={12}>
                    <Button variant="contained" className={classes.Button} color="primary" fullWidth>立即註冊</Button>
                  </Grid>
                  <Grid item sm={12}>
                    <Link route='../signin/login' >
                        <Button variant="outlined" className={classes.Button} color="primary" fullWidth>已有帳號</Button>
                    </Link>
                  </Grid>
              </Grid>
            </CardActions>
          </Card>
              
          </Grid>
        </Grid>
        
      </Layout>
    );
  }
}

export default withStyles(styles)(login);