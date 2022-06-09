import { expect, vi, it, describe, beforeEach, afterEach } from 'vitest';
import { useSchedule } from '../useSchedule';
const {
  calendarArray,
  getYear,
  getMonth,
  prevCalendar,
  nextCalendar,
  setClassName,
} = useSchedule();
const selectYear = getYear();
const selectMonth = getMonth();
describe('useSchedule', () => {
  beforeEach(() => {
    selectYear.value = new Date().getFullYear();
    selectMonth.value = new Date().getMonth() + 1;
  });
  it('カレンダーの日付リスト生成', () => {
    expect(calendarArray.value[0].dayofweek).toEqual(0);
    expect(
      calendarArray.value[calendarArray.value.length - 1].dayofweek
    ).toEqual(6); //別の月もテストして合格すれば正しいとする
  });
  it('前月のカレンダーにする', () => {
    prevCalendar();
    expect(selectMonth.value).toEqual(5);
  });
  it('次月のカレンダーにする', () => {
    nextCalendar();
    expect(selectMonth.value).toEqual(7);
  });
  it('曜日ごとにクラス名をつける', () => {
    expect(setClassName(0)).toEqual('dayofweek--0');
  });
});
