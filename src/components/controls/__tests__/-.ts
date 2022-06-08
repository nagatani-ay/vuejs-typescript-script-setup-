import Button from '../Button.vue';
import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, test } from 'vitest';

describe('button', () => {
  test('ボタン', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'ButtonText',
      },
    });
    expect(wrapper.html()).toContain('ButtonText');
  });
});
