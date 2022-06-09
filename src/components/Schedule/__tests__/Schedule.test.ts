import Calendar from '../Calendar.vue';
import ScheduleItem from '../ScheduleItem.vue';
import ScheduleMenu from '../ScheduleMenu.vue';
import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';
const dayOfWeeksJP = ['日', '月', '火', '水', '木', '金', '土'];
const { setClassName } = Calendar;
describe('Calendar', () => {
  it('曜日ごとにクラス名をつける', () => {
    expect(setClassName(0)).toEqual('dayofweek--0');
  });
});
// describe('ScheduleItem', () => {});
// describe('ScheduleMenu', () => {});
