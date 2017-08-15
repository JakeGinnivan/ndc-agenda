// @flow
import React from 'react'
import { Day } from './components/day'
import { Tab } from '../../components/Tab'
import { fetchAgenda } from '../../agenda'
import _ from 'lodash'

export class Agenda extends React.Component {
    state = { talks: [], selectedDay: '0' }

    componentWillMount() {
      fetchAgenda().then(talks => {
        this.setState({ talks })
      })
    }
  
    selectDay = (day) => {
      this.setState({
        selectedDay: day
      })
    }
  
    render() {
      const groups = _.groupBy(this.state.talks, talk => talk.day)
      
      return (
        <Tab
            match={this.props.match}
            tabs={[
              { header: 'Wednesday', data: groups['0'] },
              { header: 'Thursday', data: groups['1'] },
              { header: 'Friday', data: groups['2'] },
            ]}
            renderContent={data => (
              data && <Day talks={data}/>
            )}
          />
      )
    }
  }
  
  