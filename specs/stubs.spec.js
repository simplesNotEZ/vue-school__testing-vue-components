import { shallowMount } from '@vue/test-utils';
import ListComponent from '@/list';

const ListItemStub = {
  template: `<li>{{ movie }}</li>`,
  props: ['movie']
};

describe('ListComponent', () => {
  test('shallowMount', () => {
    const wrapper = shallowMount(ListComponent, {
      stubs: {
        ListItem: ListItemStub
      }
    });
    // expect(wrapper.html()).toMatchSnapshot();
    // Remember, you don't have to use the .html() method off of wrapper
    // since we have imported and make use of (via jest.config.js in
    // snapshotSerializers: []) the jest-serializer-vue package
    expect(wrapper).toMatchSnapshot();
  });
});
