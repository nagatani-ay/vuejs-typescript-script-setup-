import Component from '../RadioButton.vue';
import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';

describe('checkBox', () => {
  it('propsによる値の変更', async () => {
    const wrapper = mount(Component, {
      props: {
        modelValue: '全',
        itemType: '全',
      },
    });
    const input = wrapper.find('input');
    expect(input.element.checked).toBe(true);
    await wrapper.setProps({ modelValue: '済' });
    expect(input.element.checked).toBe(false);
  });
  it('クリックによる値の変更', async () => {
    const wrapper = mount(Component, {
      props: {
        modelValue: '済',
        itemType: '全',
      },
    });
    const input = wrapper.find('input');
    await input.trigger('click');
    expect(input.element.checked).toBe(true);
  });
  it('イベントが発行されたか', async () => {
    const wrapper = mount(Component, {
      props: {
        modelValue: '済',
        itemType: '全',
      },
    });
    wrapper.vm.$emit('update:modelValue');
    const input = wrapper.find('input');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });
});
