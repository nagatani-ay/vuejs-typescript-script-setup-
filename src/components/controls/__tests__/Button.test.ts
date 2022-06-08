import Button from '../Button.vue';
import { mount, shallowMount } from '@vue/test-utils';
import { describe, it } from 'vitest';

describe('button', () => {
  it('ボタン', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'ButtonText',
      },
    });
    expect(wrapper.html()).toContain('<button>ButtonText</button>');
  });
});
