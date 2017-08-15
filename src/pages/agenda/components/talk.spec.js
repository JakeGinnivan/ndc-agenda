import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import { TalkRaw } from './talk'

it('renders a talk correctly', () => {
    const dispatch = () => { }
    const talk = renderer.create(<TalkRaw
        startTime={{ hour: 9, minutes: 0}}
        title="Some Talk"
        link="http://ndcsydney.com/sometalk"
        dispatch={dispatch}
        schedule={[]} />)

    const rendered = talk.toJSON()

    expect(rendered).toMatchSnapshot()
})

it('another test', () => {
    const dispatched = []
    const dispatch = (action) => {
        dispatched.push(action)
    }
    const talk = mount(<TalkRaw
        startTime={{ hour: 9, minutes: 0}}
        title="Some Talk"
        link="http://ndcsydney.com/sometalk"
        dispatch={dispatch}
        schedule={[]} />)

    const rendered = talk.find('button')
    rendered.simulate('click', { button: 0 })

    expect(dispatched).toMatchSnapshot()
})