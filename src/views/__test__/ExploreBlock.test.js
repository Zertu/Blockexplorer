import { mount, shallowMount, flushPromises } from '@vue/test-utils'
import ExploreBlock from '../ExploreBlock.vue'
import TransactionList from '../../components/TransactionList.vue'
import BlockInfo from '../../components/BlockInfo.vue'
import { get } from '../../utils/request'
import router from '../../router'
import testdata from './test.json'

jest.mock('../../utils/request', () => ({
  get: jest.fn()
}))
describe('block test', () => {
  test('input a invalid value', async () => {
    get.mockImplementationOnce(() =>
      Promise.reject({
        error: 'not-found-or-invalid-arg',
        message: 'Item not found or argument invalid'
      })
    )
    router.push('/block/1235325')
    await router.isReady()
    const wrapper = mount(ExploreBlock, {
      global: {
        plugins: [router]
      }
    })
    // 等待异步执行完毕
    await flushPromises()
    expect(wrapper.find('.n-empty__description').text()).toBe('你什么也找不到')
  })
  test('input a available value', async () => {
    get.mockImplementationOnce(() => Promise.resolve(testdata))
    router.push(
      '/block/00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa'
    )
    await router.isReady()
    const wrapper = mount(ExploreBlock, {
      global: {
        plugins: [router]
      }
    })
    // 等待异步执行完毕
    await flushPromises()
    expect(wrapper.getComponent(BlockInfo).props()).toEqual({
      blockData: testdata
    })
    expect(wrapper.getComponent(TransactionList).props()).toEqual({
      transactionList: testdata.tx
    })
  })
})
