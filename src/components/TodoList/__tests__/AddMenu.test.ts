import AddMenu from '../AddMenu.vue';
import { describe, it } from 'vitest';
import { mount } from '@vue/test-utils';

describe('AddMenu', () => {
  it('新しいアイテムの追加', async () => {
    const wrapper = mount(AddMenu);
    const spy = vi.spyOn(wrapper.vm, 'onCreate');

    await wrapper.find('.create_button').trigger('click');
    expect(spy).toHaveBeenCalled();
  });
});
