import React from 'react'
import { Rating } from './Rating'
import { mount } from 'enzyme'

const props = {
  id: 1,
  setRating: () => {},
  deleteRating: () => {}
}

describe('Rating', () => {
  describe('when user is not defined', () => {
    test('does not render user rating', () => {
      const wrapper = mount(<Rating {...props} user={{}} />)

      expect(wrapper.find('#rating-1-1-false').exists()).toBe(false)
    })
  })

  describe('when average rating is not defined', () => {
    test('does not render user rating', () => {
      const wrapper = mount(<Rating {...props} user={{}} />)

      expect(wrapper.find('#average-rating-1').exists()).toBe(false)
    })
  })

  describe('when average rating is defined', () => {
    test('does not render user rating', () => {
      const wrapper = mount(<Rating {...props} averageRating={4} user={{}} />)

      expect(wrapper.find('#average-rating-1').exists()).toBe(true)
      expect(wrapper.find('#average-rating-1').text()).toBe(
        'Average rating: 4 '
      )
    })
  })

  describe('when user is defined', () => {
    test('renders rating stars', () => {
      const wrapper = mount(
        <Rating {...props} user={{ email: 'test@test.com' }} />
      )

      for (let index = 1; index <= 5; index++) {
        expect(wrapper.find(`#rating-1-${index}-false`).exists()).toBe(true)
      }
    })

    test('changes rating when clicked', () => {
      const wrapper = mount(
        <Rating {...props} user={{ email: 'test@test.com' }} />
      )

      for (let index = 1; index <= 5; index++) {
        expect(wrapper.find(`#rating-1-${index}-false`).exists()).toBe(true)
      }

      wrapper.find(`#rating-1-3-false`).at(0).simulate('click')

      expect(wrapper.find(`#rating-1-1-true`).exists()).toBe(true)
      expect(wrapper.find(`#rating-1-2-true`).exists()).toBe(true)
      expect(wrapper.find(`#rating-1-3-true`).exists()).toBe(true)
      expect(wrapper.find(`#rating-1-4-false`).exists()).toBe(true)
      expect(wrapper.find(`#rating-1-5-false`).exists()).toBe(true)
    })

    describe('when rating is defined', () => {
      test('renders user rating', () => {
        const wrapper = mount(
          <Rating {...props} user={{ email: 'test@test.com' }} rating={3} />
        )

        expect(wrapper.find(`#rating-1-1-true`).exists()).toBe(true)
        expect(wrapper.find(`#rating-1-2-true`).exists()).toBe(true)
        expect(wrapper.find(`#rating-1-3-true`).exists()).toBe(true)
        expect(wrapper.find(`#rating-1-4-false`).exists()).toBe(true)
        expect(wrapper.find(`#rating-1-5-false`).exists()).toBe(true)
      })
    })
  })
})
