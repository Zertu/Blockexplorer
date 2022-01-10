import { mount } from '@vue/test-utils'

import Home from '../Home.vue'

test('Home.vue', async () => {
  const mockRouter = {
    push: jest.fn()
  }
  const wrapper = mount(Home, {
    global: {
      mocks: {
        $router: mockRouter
      }
    }
  })
  const input = wrapper.find('input')
  await input.setValue('123')
  expect(input.element.value).toBe('123')
})
