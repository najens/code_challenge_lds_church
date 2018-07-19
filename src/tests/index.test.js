import React from 'react'
import { render } from 'react-dom'
import { App } from '../components/App'

jest.mock('react-dom', ()=> ({render: jest.fn()}))

describe('rendering', () => {
	let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
	it('should render without crashing', () => {
		const div = document.createElement('div')
	  render(wrapper, div)
	  global.document.getElementById = (id) => id ==='root' && div
	  expect(render).toHaveBeenCalledWith(wrapper, div)
		expect(render).toHaveBeenCalledTimes(1)
	})
})
