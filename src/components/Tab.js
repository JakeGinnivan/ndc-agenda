import React from 'react'
import { SelectDay } from './select-day'
import { Link, Route } from 'react-router-dom'

export class Tab extends React.Component {
    render() {
      return (
        <div>
          {this.props.tabs.map((tab, tabIndex) => (
            <Link
              className={"tab-header"}
              to={`${this.props.match.url}/${tab.header}`}
            >
              {tab.header}
            </Link>
          ))}
  
          <Route
            path={`${this.props.match.url}/:header`}
            render={(renderProps) => {
              const day = renderProps.match.params.header
               const tabInfo = this.props.tabs.filter(tab => tab.header === day)[0]
               const tabContents = this.props.renderContent(tabInfo.data)
               return tabContents || <div>Loading...</div>
            }}
          />
          <Route component={SelectDay} />
        </div>
      )
    }
  }