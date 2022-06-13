import ScheduleItem from '../ScheduleItem.vue';
import { Todo } from '../../../types';
import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';

const ParentComponent = {
  components: { ScheduleItem },
  template: `<schedule-item v-for="todo in list" :calanderTodo="todo"
></schedule-item>`,
  data() {
    return {
      list: [
        {
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
        {
          code: 'testData2',
          text: 'test2',
          status: false,
          time: 'time',
          deadline: {
            year: 2022,
            month: 5,
            day: 22,
          },
        },
      ],
    };
  },
};

describe('ScheduleItem', () => {
  it('v-ifの表示切替', async () => {
    const wrapper = mount(ParentComponent);
    const div = wrapper.find('[class="todo__item"]');
    expect(wrapper.find('[class="item__menu"]').exists()).toBe(false)
    await div.trigger('dblclick');
    expect(wrapper.find('[class="item__menu"]').exists()).toBeTruthy()

  });
});
