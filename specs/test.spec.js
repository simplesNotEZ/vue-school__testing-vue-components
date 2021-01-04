import { mount, shallowMount } from '@vue/test-utils';
import TestComponent from '@/test';
import List from '@/list';

test('mount the TestComponent', () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      value: 'FlueSchool'
    }
  });
  console.log('wrapper.attributes(): ', wrapper.attributes());
  console.log('wrapper.html(): ', wrapper.html());
  console.log(
    "wrapper.find('h1').attributes(): ",
    wrapper.find('h1').attributes()
  );
  console.log('wrapper.vm.$props.value: ', wrapper.vm.$props.value);
  console.log('wrapper.vm.value: ', wrapper.vm.value);
  console.log('wrapper.vm.$data: ', wrapper.vm.$data);
  console.log('wrapper.vm.$data.marvelMovies: ', wrapper.vm.$data.marvelMovies);
  console.log('wrapper.vm.marvelMovies: ', wrapper.vm.marvelMovies);

  // console.log('wrapper.vm........', wrapper.vm);

  expect(wrapper.html()).toMatchSnapshot();
});

test('shallowMount vs mount of List component', () => {
  console.log('mount: ', mount(List).html());
  console.log('shallowMount: ', shallowMount(List).html());
});

test('ListComponent', async () => {
  const wrapper = mount(List);
  const movies = wrapper.vm.marvelMovies;
  wrapper.setData({ marvelMovies: [...movies, 'Resevoir Doggies'] });
  await wrapper.vm.$nextTick();
  // we can simplify the below, because we have installed the jest-serializer-vue package,
  //   which "prettifies" the snapshot for us
  // expect(wrapper.html()).toMatchSnapshot();
  expect(wrapper).toMatchSnapshot();
  expect(
    wrapper
      .findAll('li')
      .at(3)
      .text()
  ).toBe('Resevoir Doggies');
});
