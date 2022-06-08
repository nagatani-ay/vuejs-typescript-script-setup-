import AddMenu from '../AddMenu.vue';
import { mount, shallowMount } from '@vue/test-utils';
import { expect, vi, it, describe, beforeEach, afterEach } from 'vitest';
import TextInput from "../TextInput.vue';

describe('AddMenu', () => {
  const wrapper = mount(AddMenu, {});
  it('',  () => {
    expect(wrapper.find('cutom-input').exists()).toEqual(true);
  });
  it('', () => {});
  it('textInput', async () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: '',
      },
    });
  
    const input = wrapper.get('input');
    await wrapper.setProps({ modelValue: 'test' });
    expect(wrapper.vm.modelValue).toBe('test');
  
    wrapper.vm.$emit('update:modelValue');
    expect(wrapper.emitted()).toBeTruthy();
  });
  it('', () => {});
  it('', () => {});
  it('', () => {});
  it('', () => {});
});
