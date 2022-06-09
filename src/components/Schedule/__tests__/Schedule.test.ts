import Calendar from '../Calendar.vue';
import ScheduleItem from '../ScheduleItem.vue';
import ScheduleMenu from '../ScheduleMenu.vue';
import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';
import { useSchedule } from '../../../Function/useSchedule';
const { dayOfWeeksJP } = useSchedule();

// localstorageのモック

describe('Calendar', () => {
  it('カレンダー曜日', async () => {
    // const spy = vi.spyOn(localStorage, 'getItem').mockImplementation(() => null);
    // const wrapper = mount(Calendar, { shallow: true });
    // console.log(wrapper);
  });
});
// describe('ScheduleItem', () => {});
// describe('ScheduleMenu', () => {});
