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
    const div = wrapper.find('.todo__item');
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
    const div = wrapper.find('.todo__item');
    await div.trigger('dblclick');
    expect(wrapper.find('.item__menu').exists()).toBe(true);
  });
});
