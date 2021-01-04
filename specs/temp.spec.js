import Temprature from '@/temprature';
import { mount } from '@vue/test-utils';

describe('computed', () => {
  test('celsius', async () => {
    // const wrapper = mount(Temprature);
    // expect(wrapper.vm.celsius).toBe(0);
    // wrapper.setData({ degrees: 23 });
    // await wrapper.vm.$nextTick();
    // expect(wrapper.vm.celsius).toBe(23);

    // instead of using setData to change degrees, just change it directly off of vm, and...
    // you don't even have to use the whole wrapper, but instead can just use the vm that is
    // inside of/on wrapper:
    const { vm } = mount(Temprature);
    expect(vm.celsius).toBe(0);
    vm.degrees = 23;
    expect(vm.celsius).toBe(23);
  });

  test('fahrenheit', () => {
    const { vm } = mount(Temprature);
    expect(vm.fahrenheit).toBe(32);
    vm.degrees = 16;
    expect(vm.fahrenheit).toBe(60.8);
  });
});

describe('watch temp', () => {
  test('temp', async () => {
    const wrapper = mount(Temprature, {
      propsData: {
        temp: '40'
      }
    });
    const { vm } = wrapper;
    expect(vm.temp).toBe('40');
    expect(vm.degrees).toBe(40);
    expect(vm.type).toBe('celsius');
    wrapper.setProps({
      temp: '50f'
    });
    await vm.$nextTick();
    expect(vm.degrees).toBe(50);
    expect(vm.type).toBe('fahrenheit');
    // Now, test the computed properties
    expect(vm.fahrenheit).toBe(50);
    expect(vm.celsius).toBe(10);
  });
});
