import { expect, vi, it, describe, beforeEach, afterEach } from 'vitest';
import { useSchedule } from '../useSchedule';
const { calendarArray, currentYear, currentMonth, prevCalendar, nextCalendar } =
  useSchedule();
const selectYear = currentYear;
const selectMonth = currentMonth;
describe('useSchedule', () => {
  beforeEach(() => {
    selectYear.value = new Date().getFullYear();
    selectMonth.value = new Date().getMonth() + 1;
  });
  it('カレンダーの日付リスト生成', () => {
    expect(calendarArray.value[0].dayofweek).toEqual(0);
    expect(
      calendarArray.value[calendarArray.value.length - 1].dayofweek
    ).toEqual(6);
  });
  it('前月のカレンダーにする', () => {
    prevCalendar();
    expect(selectMonth.value).toEqual(5);
  });
  it('次月のカレンダーにする', () => {
    nextCalendar();
    expect(selectMonth.value).toEqual(7);
  });
});
