import { mount, shallowMount, flushPromises } from '@vue/test-utils'
import TransactionList from '../TransactionList.vue'
import testData from '../../views/__test__/test.json'
describe('test TransactionList', () => {
  it('should reader nothing', () => {
    const wrapper = shallowMount(TransactionList)
    expect(() => wrapper.get('n-list')).toThrowError()
  })
  it('should render 10 transaction', () => {
    const wrapper = mount(TransactionList, {
      props: {
        transactionList: testData.tx
      }
    })
    expect(wrapper.findAll('.n-list-item')).toHaveLength(10)
  })
})
