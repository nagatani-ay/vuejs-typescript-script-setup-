import TodoMenu from '../TodoMenu.vue';
import { describe, it } from 'vitest';
import { mount } from '@vue/test-utils';

describe('TodoMenu', () => {
  it('新規追加メニューが閉じているか', async () => {
    const wrapper = mount(TodoMenu);
    expect(wrapper.find('.addmenu').exists()).toBe(false);
  });
  it('ボタンクリックで新規追加メニューが表示されるか', async () => {
    const wrapper = mount(TodoMenu);
    await wrapper.find('.toggle').trigger('click');
    expect(wrapper.find('.addmenu').exists()).toBe(true);
  });
});
