// @flow
import React from 'react'
import { Day } from './components/day'
import { Tab } from '../../components/Tab'
import _ from 'lodash'
import { loadTalks } from '../../app.redux'
import { connect } from 'react-redux'

class AgendaRaw extends React.Component {
    state = { selectedDay: '0' }

    componentWillMount() {
      this.props.dispatch(loadTalks())
    }
  
    selectDay = (day) => {
      this.setState({
        selectedDay: day
      })
    }
  
    render() {
      const groups = _.groupBy(this.props.talks, talk => talk.day)
      
      if (this.props.loading) {
        return <div>Loading!!</div>
      }

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

const mapStateToProps = state => ({ talks: state.talks, loading: state.loading })
export const Agenda = connect(mapStateToProps)(AgendaRaw)