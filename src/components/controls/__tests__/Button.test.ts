import Component from '../Button.vue';
import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';

describe('button', () => {
  it('フォールバックコンテンツ', () => {
    const wrapper = mount(Component, {});
    expect(wrapper.html()).toContain('Button');
  });
  it('スロットを渡す', () => {
    const wrapper = mount(Component, {
      slots: {
        default: 'ButtonText',
      },
    });
    expect(wrapper.html()).toContain('ButtonText');
  });
});
