import Component from '../Select.vue';
import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';

describe('Select', () => {
  it('propsによる値の変更', async () => {
    const wrapper = mount(Component, {
      props: {
        optionList: ['Text', 'Status', 'Time', 'Deadline'],
        listType: 'SortType',
        modelValue: 'Text',
      },
    });
    const select = wrapper.find('select');
    expect(select.element.value).toBe('Text');
    await wrapper.setProps({ modelValue: 'Status' });
    expect(select.element.value).toBe('Status');
  });
  it('イベントが発行されたか', async () => {
    const wrapper = mount(Component, {
      props: {
        optionList: ['Text', 'Status', 'Time', 'Deadline'],
        listType: 'SortType',
        modelValue: 'Text',
      },
    });
    wrapper.vm.$emit('update:modelValue');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });
});
