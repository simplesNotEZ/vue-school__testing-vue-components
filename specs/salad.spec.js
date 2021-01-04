import Vuex from 'vuex';
import Vue from 'vue';
import { mount, createLocalVue } from '@vue/test-utils';

import SaladBowlComponent from '@/salad-bowl';
import saladStore from '@/store/salad-store';

const VueWithVuex = createLocalVue();
VueWithVuex.use(Vuex);

test('store is loaded', () => {
  const store = new Vuex.Store(saladStore);
  const wrapper = mount(SaladBowlComponent, {
    store,
    localVue: VueWithVuex
  });
  store.state.salad.push('cucumber');

  expect(wrapper.vm.salad).toEqual(['cucumber']);
});

test('store works', () => {
  // re-initialize the store
  const store = new Vuex.Store(saladStore);
  const wrapper = mount(SaladBowlComponent, {
    store,
    localVue: VueWithVuex
  });
  wrapper.vm.addIngredient('cheetos');
  expect(wrapper.vm.salad).toEqual(['cheetos']);
});
