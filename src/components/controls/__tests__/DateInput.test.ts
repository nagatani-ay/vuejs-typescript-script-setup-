import Component from '../DateInput.vue';
import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';

describe('DateInput', () => {
  it('値の変更', async () => {
    const wrapper = mount(Component, {
      props: {
        modelValue: '2022-06-08',
      },
    });
    const input = wrapper.find('input');
    expect(input.element.value).toBe('2022-06-08');
    await input.setValue('2022-06-09');
    expect(input.element.value).toBe('2022-06-09');
  });
  it('イベントが発行されたか', async () => {
    const wrapper = mount(Component, {
      props: {
        modelValue: '2022-06-08',
      },
    });
    const input = wrapper.find('input');
    await input.setValue('2022-12-02');
    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
    expect(wrapper.emitted('update:modelValue')).toEqual([['2022-12-02']]);
  });
});
