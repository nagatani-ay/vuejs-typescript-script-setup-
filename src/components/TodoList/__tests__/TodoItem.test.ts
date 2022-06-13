import TodoItem from '../TodoItem.vue';
import { describe, it } from 'vitest';
import { mount } from '@vue/test-utils';

describe('TodoItem', () => {
  it('編集の完了', async () => {
    const wrapper = mount(TodoItem, {
      props: {
        todo: {
          code: 'testData1',
          text: 'test1',
          status: false,
          time: 'time',
          deadline: {
            year: 2022,
            month: 5,
            day: 22,
          },
        },
      },
    });
    const spy = vi.spyOn(wrapper.vm, 'onEdit');
    await wrapper.find('.toggle').trigger('click');
    await wrapper.find('.edit_button').trigger('click');
    expect(spy).toHaveBeenCalled();
  });

  it('アイテムの削除', async () => {
    const wrapper = mount(TodoItem, {
      props: {
        todo: {
          code: 'testData1',
          text: 'test1',
          status: false,
          time: 'time',
          deadline: {
            year: 2022,
            month: 5,
            day: 22,
          },
        },
      },
    });
    const spy = vi.spyOn(wrapper.vm, 'removeData');
    await wrapper.find('.toggle').trigger('click');
    await wrapper.find('.remove_button').trigger('click');
    expect(spy).toHaveBeenCalled();
  });
});
