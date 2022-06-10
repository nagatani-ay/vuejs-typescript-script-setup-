import Calendar from '../Calendar.vue';
import ScheduleItem from '../ScheduleItem.vue';
import ScheduleMenu from '../ScheduleMenu.vue';
import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';
import { useSchedule } from '../../../Function/useSchedule';
import { useTodos } from '../../../Function/useTodos';
import { Todo } from '../../../types';
const { dayOfWeeksJP } = useSchedule();

const testData1: Todo = {
  code: 'testData1',
  text: 'test1',
  status: false,
  time: 'time',
  deadline: {
    year: 2022,
    month: 6,
    day: 10,
  },
};
const testData2: Todo = {
  code: 'testData2',
  text: 'test2',
  status: false,
  time: 'time',
  deadline: {
    year: 2022,
    month: 6,
    day: 10,
  },
};

const localStorage = () => {};

vi.mock('useTodos', () => {
  return {
    default: {
      calendarItems: vi.fn(() => {
        [{ '2022-06-10': testData1, testData2 }];
      }),
    },
  };
});

describe('Calendar', () => {
  it('カレンダー曜日', async () => {
    // const spy = vi.spyOn(localStorage, 'getItem').mockImplementation(() => null);
    const wrapper = mount(Calendar, { shallow: true });
    // console.log(wrapper);
  });
});
// describe('ScheduleItem', () => {});
// describe('ScheduleMenu', () => {});
