import Component from '../CheckBox.vue';
import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';

describe('checkBox', () => {
  it('チェックボックス', async () => {
    const wrapper = mount(Component, {
      props: {
        modelValue: false,
      },
    });
    const input = wrapper.find('input');
    expect(input.element.checked).toBe(false);
    await wrapper.setProps({ modelValue: true });
    expect(input.element.checked).toBe(true);
  });
});
