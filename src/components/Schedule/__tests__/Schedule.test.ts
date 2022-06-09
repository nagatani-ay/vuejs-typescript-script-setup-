import Calendar from '../Calendar.vue';
import ScheduleItem from '../ScheduleItem.vue';
import ScheduleMenu from '../ScheduleMenu.vue';
import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';
import { useSchedule } from '../../../Function/useSchedule';
const { dayOfWeeksJP } = useSchedule();

describe('Calendar', () => {
  it('カレンダー曜日', () => {
    const wrapper = mount(Calendar);
    console.log(wrapper.find('calendar__dayofweek').html());
  });
});
// describe('ScheduleItem', () => {});
// describe('ScheduleMenu', () => {});
