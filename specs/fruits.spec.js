import FruitBasket from '@/fruit-basket';
import { mount } from '@vue/test-utils';

describe('fruity bastard', () => {
  test('can add fruits to basket with DOM', async () => {
    const wrapper = mount(FruitBasket);
    console.log('wrapper.element.value:', wrapper.element.value);
    const input = wrapper.find('input');
    const button = wrapper.find('button');

    expect(wrapper.findAll('li').length).toBe(0);

    // We use the element property of Wrapper (here the Wrapper is of the input DOM node)
    // to get the input element itself and then set its value property
    input.element.value = 'banana';
    input.trigger('input');
    expect(wrapper.vm.fruit).toBe('banana');

    console.log('b4 click wrapper.vm.basket: ', wrapper.vm.basket);
    expect(wrapper.vm.basket).toStrictEqual([]);
    button.trigger('click');
    console.log('AFTER click wrapper.vm.basket: ', wrapper.vm.basket);
    // For some reason, they don't use .toContain like below,
    // but instead use the .arrayContaining.  I don't know why.
    // expect(wrapper.vm.basket).toContain('banana');
    console.log(
      "expect.arrayContaining(['banana']).sample......",
      expect.arrayContaining(['banana']).sample
    );
    console.log('wrapper.vm.basket......', wrapper.vm.basket);
    expect(wrapper.vm.basket).toEqual(expect.arrayContaining(['banana']));

    await wrapper.vm.$nextTick();
    expect(wrapper.findAll('li').length).toBe(1);
  });
});
