import ScheduleMenu from '../ScheduleMenu.vue';
import { mount } from '@vue/test-utils';
import { describe, it, beforeEach, afterEach } from 'vitest';
import { useSchedule } from '../../../Function/useSchedule';

vi.mock('../../../Function/useSchedule', () => {
  return {
    useSchedule: vi.fn(() => ({
      getYear: vi.fn(() => 2022),
      getMonth: vi.fn(() => 1),
    })),
  };
});

describe('ScheduleMenu', () => {
  it('カレンダーの年を取得', () => {
    const wrapper = mount(ScheduleMenu);
    expect(wrapper.find('.currentYear').text()).toBe('2022');
  });
  it('カレンダーの月を取得', () => {
    const wrapper = mount(ScheduleMenu);
    expect(wrapper.find('.currentMonth').text()).toBe('1月');
  });
});
