import React from 'react'
import { MemoryRouter } from 'react-router'
import { App } from '../components/App'
import Dashboard from '../components/Dashboard'
import NotFound from '../components/NotFound'

const mockFn = jest.fn()

describe('rendering', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App handleInitialData={mockFn}/>)
  })
  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })
  it('should render the snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

describe('lifecycle', () => {
  let wrapper
	const spy = jest.spyOn(App.prototype, 'componentDidMount')
  beforeEach(() => {
    wrapper = shallow(<App handleInitialData={mockFn} />)
  })
  describe('when component is mounted', () => {
    beforeEach(() => {
      wrapper.instance().componentDidMount()
    })
		it('calls componentDidMount', () => {
	    expect(spy).toHaveBeenCalled()
	    spy.mockReset()
	    spy.mockRestore()
	  })
  })
})
