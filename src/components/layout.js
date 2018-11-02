import React, {Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import Header from './header'
import NavBar from "./navBar"
import './layout.css'

export default class Layout extends Component {
  constructor(props) {
    super(props);
      this.state = {
        window: undefined,
      };
  }

  componentDidMount() {
    this.setState({ window: window });
  }

  render() {
    if (this.state.window) {
      return (
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <div>
              <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
              >
                <html lang="en" />
              </Helmet>
              <Header siteTitle={data.site.siteMetadata.title} />
              <div
                style={{
                  margin: '0 auto',
                  maxWidth: 960,
                  padding: '0px 1.0875rem 1.45rem',
                  paddingTop: 0,
                }}
              >
                <NavBar />
                {this.props.children}
              </div>
            </div>
          )}
        />
      )

    } else {
      return <span />
    }

  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

