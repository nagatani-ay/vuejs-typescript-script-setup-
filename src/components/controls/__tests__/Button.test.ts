import Component from '../Button.vue';
import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, test } from 'vitest';

const Componenttest = {
  template: '<div>Hello world</div>',
};

test('スロット', () => {
  const wrapper = mount(Componenttest, {
    //   slots: {
    //     default: 'ButtonText',
    //   },
  });
  expect(wrapper.html()).toContain('Hello world');
});

// describe('button', () => {
//   test('ボタン', () => {
//     const wrapper = mount(Button, {
//       slots: {
//         default: 'ButtonText',
//       },
//     });
//     expect(wrapper.html()).toContain('ButtonText');
//   });
// });
