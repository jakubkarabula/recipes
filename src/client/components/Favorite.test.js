import React from 'react'
import { Favorite } from './Favorite'
import { mount } from 'enzyme'

const props = {
  id: 1,
  favoriteRecipe: () => {},
  unfavoriteRecipe: () => {},
  favorite: false
}

describe('Favorite', () => {
  describe('when user is not defined', () => {
    test('does not render Favorite', () => {
      const wrapper = mount(<Favorite {...props} user={{}} />)

      expect(wrapper.find('#favorite-1').exists()).toBe(false)
    })
  })

  describe('when user is defined', () => {
    describe('when recipe is not favorite', () => {
      test('renders favorite icon', () => {
        const wrapper = mount(
          <Favorite {...props} user={{ email: 'test@test.com' }} />
        )

        expect(wrapper.find('#favorite-1').exists()).toBe(true)
      })

      test('changes to favorite when clicked', () => {
        const wrapper = mount(
          <Favorite {...props} user={{ email: 'test@test.com' }} />
        )

        expect(wrapper.find('#favorite-1').exists()).toBe(true)
        wrapper.find('#favorite-1 svg').at(0).simulate('click')
        expect(wrapper.find('#unfavorite-1').exists()).toBe(true)
      })
    })

    describe('when recipe is favorite', () => {
      test('renders favorite icon', () => {
        const wrapper = mount(
          <Favorite
            {...props}
            favorite={true}
            user={{ email: 'test@test.com' }}
          />
        )

        expect(wrapper.find('#unfavorite-1').exists()).toBe(true)
      })
    })
  })
})
