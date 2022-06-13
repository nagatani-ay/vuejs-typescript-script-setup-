import Calendar from '../Calendar.vue';

import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';

describe('Calendar', () => {
  it('曜日ごとにクラス名をつける', async () => {
    const wrapper = mount(Calendar, { shallow: true });
    const array = wrapper.findAll('.calendar__dayofweek');
    array.forEach((item, count) => {
      expect(item.classes(`dayofweek--${count}`)).toBe(true);
    });
  });
  it('各日付にクラスをつける', async () => {
    const wrapper = mount(Calendar, { shallow: true });
    const array = wrapper.findAll('.calendar__day');
    array.forEach((item, count) => {
      expect(item.classes(`dayofweek--${count % 7}`)).toBe(true);
    });
  });
});
