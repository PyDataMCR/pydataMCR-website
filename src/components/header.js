import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/PyDataLogo.png'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0}}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={Logo} style={{ maxHeight: 101 }}></img>
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
