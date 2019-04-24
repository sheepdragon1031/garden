import { Link, Router } from '../routes'
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import Head from'../components/head/index'
import Appbar from '../components/appbar/index'
const styles = ({

})
class App extends Component {
  renderHead() {
    return(
      <Head />
    )
  }
  render() {
    return (
      <div className="root" >
          <Appbar />
           <ul>
            <li>
              <Link route='blog' params={{ slug: 'hello-world' }}>
                <a>Blog: Hello worlds</a>
              </Link>
            </li>
            <li>
              <Link route='blog' params={{ slug: 'another-blog-post' }}>
                <a>Blog: Another blog post</a>
              </Link>
            </li>
            <li>
              <Link route='blog' params={{ slug: 'non-existant' }}>
                <a>Blog: Not found</a>
              </Link>
            </li>
            <li>
              <button onClick={() => Router.pushRoute('about', { foo: 'bar' })}>
                About foo bars
              </button>
            </li>
            
          </ul> 
          
      </div>
    );
  }
}

export default withStyles(styles)(App);