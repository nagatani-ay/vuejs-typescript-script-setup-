import Calendar from '../Calendar.vue';

import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';

describe('Calendar', () => {
  it('曜日ごとにクラス名をつける', async () => {
    const wrapper = mount(Calendar, { shallow: true });
    const array = wrapper.findAll('[class="calendar__dayofweek"]');
    array.forEach((item, count) => {
      expect(item.html()).toContain(`dayofweek--${count}`);
    });
  });
  it('カレンダーの生成', async () => {
    const wrapper = mount(Calendar, { shallow: true });
    const array = wrapper.findAll('.calendar__day');
    array.forEach((item, count) => {
      expect(item.html()).toContain(`dayofweek--${count % 7}`);
    });
  });
});
