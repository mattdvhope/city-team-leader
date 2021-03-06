import React from "react"
import { Link } from "gatsby"
import {  isLoggedIn } from "../services/auth"
import Layout from "../components/layout"

export default (props) => {
  return (
    <Layout >
      <br/>
      <div>
        {isLoggedIn() ? (
          <div>
            You are logged in, so check your{" "}
            <Link to="/app/dashboard">dashboard</Link>
          </div>
        ) : (
          <div>
            You should <Link to="/app/login">log in</Link> to see restricted
            content
          </div>
        )}
      </div>
    </Layout>
  )
}
