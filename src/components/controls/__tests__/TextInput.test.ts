import Component from '../TextInput.vue';
import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';

describe('TextInput', () => {
  it('propsによる値の変更', async () => {
    const wrapper = mount(Component, {
      props: {
        modelValue: 'test',
      },
    });
    const input = wrapper.find('input');
    expect(input.element.value).toBe('test');
    await wrapper.setProps({ modelValue: 'test2' });
    expect(input.element.value).toBe('test2');
  });
  it('イベントが発行されたか', async () => {
    const wrapper = mount(Component, {
      props: {
        modelValue: 'test',
      },
    });
    const input = wrapper.find('input');
    await input.setValue('test2');
    await input.setValue('test3');

    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
    expect(wrapper.emitted('update:modelValue')).toHaveLength(2);

    expect(wrapper.emitted('update:modelValue')).toEqual([
      ['test2'],
      ['test3'],
    ]);
  });
});
