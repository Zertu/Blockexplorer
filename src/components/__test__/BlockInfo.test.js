import { mount, shallowMount, flushPromises } from '@vue/test-utils'
import BlockInfo from '../BlockInfo.vue'
import testData from '../../views/__test__/test.json'
describe('test BlockInfo', () => {
  it('should reader nothing', () => {
    const wrapper = shallowMount(BlockInfo)
    expect(() => wrapper.get('n-list')).toThrowError()
  })
  it('should render blockinfo', () => {
    const wrapper = mount(BlockInfo, {
      props: {
        blockData: testData
      }
    })
    expect(wrapper.findAll('.n-list-item')).toHaveLength(10)
  })
})
