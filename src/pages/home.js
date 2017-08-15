// @flow
import React from 'react'
import { Link } from 'react-router-dom'

export class Home extends React.Component {
    render() {
      return (
        <div>
            <div>Home</div>
            <Link to="/agenda">Agenda</Link>
        </div>
      )
    }
  }
  