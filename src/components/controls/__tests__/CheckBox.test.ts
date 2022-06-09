import Component from '../CheckBox.vue';
import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';

describe('checkBox', () => {
  it('propsによる値の変更', async () => {
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
  it('クリックによる値の変更', async () => {
    const wrapper = mount(Component, {
      props: {
        modelValue: false,
      },
    });
    const input = wrapper.find('input');
    await input.trigger('click');
    expect(input.element.checked).toBe(true);
  });
  it('イベントが発行されたか', async () => {
    const wrapper = mount(Component, {
      props: {
        modelValue: false,
      },
    });
    const input = wrapper.find('input');
    await input.setValue(true);
    await input.setValue(false);

    expect(wrapper.emitted()).toHaveProperty('check');
    expect(wrapper.emitted().check).toHaveLength(2);
  });
});
