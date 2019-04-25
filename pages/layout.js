import React, { Component, Children } from 'react';
import { withStyles } from '@material-ui/core/styles'
import Head from'../components/head/index'
import Appbar from '../components/appbar/index'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    main:{
        paddingLeft: theme.spacing.unit*3,
        paddingRight: theme.spacing.unit*3,
    }
});
class layout extends Component { 
  renderHead() {
    return(
      <Head />
    )
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="root" >
        <Appbar />
        <div className={classes.main}>
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(layout);

