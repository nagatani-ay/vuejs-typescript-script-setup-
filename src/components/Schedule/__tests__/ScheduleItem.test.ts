import ScheduleItem from '../ScheduleItem.vue';
import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';

describe('ScheduleItem', () => {
  it('v-ifが表示されていないことの確認', async () => {
    const wrapper = mount(ScheduleItem, {
      props: {
        calanderTodo: {
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
    expect(wrapper.find('.item__menu').exists()).toBe(false);
  });

  it('ダブルクリックでv-ifの表示がされる', async () => {
    const wrapper = mount(ScheduleItem, {
      props: {
        calanderTodo: {
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
    await wrapper.find('.todo__item').trigger('dblclick');
    expect(wrapper.find('.item__menu').exists()).toBe(true);
  });

  it('編集の完了', async () => {
    const wrapper = mount(ScheduleItem, {
      props: {
        calanderTodo: {
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
    await wrapper.find('.todo__item').trigger('dblclick');
    await wrapper.find('.confirm_button').trigger('click');
    expect(spy).toHaveBeenCalled();
  });
});
