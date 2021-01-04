import UserList from '@/exercise-1';
import { mount } from '@vue/test-utils';
import { name } from 'faker';

describe('UserList', () => {
  test('component renders the users', () => {
    const wrapper = mount(UserList, {
      propsData: {
        users: [name.findName(), name.findName(), name.findName()]
      }
    });

    const listItemArray = wrapper.findAll('li');
    // console.log("wrapper.props('users')[0]....", wrapper.props('users')[0]);
    // console.log('listItemArray.....', listItemArray);
    // console.log('listItemArray.at(0).....', listItemArray.at(0));
    expect(listItemArray.length).toBe(3);
    for (let i = 0; i < listItemArray.length; i++) {
      expect(listItemArray.at(i).text()).toBe(wrapper.props('users')[i]);
    }
  });

  test('filter works', async () => {
    const wrapper = mount(UserList, {
      propsData: {
        users: [name.findName(), name.findName(), name.findName()]
      }
    });
    // Testing stuff when the filter is empty string
    // console.log('wrapper.vm.filteredUsers......', wrapper.vm.filteredUsers);
    // console.log("wrapper.props('users')....", wrapper.props('users'));
    expect(wrapper.vm.filter).toBe('');
    expect(wrapper.vm.filteredUsers).toEqual(wrapper.props('users'));

    // Testing for adding to the filter

    // add something to the filter
    const input = wrapper.find('input');
    input.element.value = wrapper.props('users')[1];
    input.trigger('input');
    expect(wrapper.vm.filter).toBe(wrapper.props('users')[1]);
    await wrapper.vm.$nextTick();
    const liAfterFilter = wrapper.findAll('li');
    // console.log('wrapper.vm.filteredUsers AFTER: ', wrapper.vm.filteredUsers);
    // console.log('liAfterFilter.length.....', liAfterFilter.length);
    expect(liAfterFilter.at(0).text()).toBe(wrapper.props('users')[1]);
  });
});
