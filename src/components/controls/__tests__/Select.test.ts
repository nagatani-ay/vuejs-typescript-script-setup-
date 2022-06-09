import SelectMenu from '../Select.vue';
import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';
const ParentComponent = {
  components: { SelectMenu },
  template: `<select-menu v-model="selectValue" label="SortType"  :optionList="Types"></select-menu>`,
  data() {
    return {
      selectValue: '',
      Types: ['Text', 'Status', 'Time', 'Deadline'],
    };
  },
};

describe('Select', () => {
  it('オプションを生成', async () => {
    const Types = ['Text', 'Status', 'Time', 'Deadline'];
    const wrapper = mount(ParentComponent);
    const options = wrapper.findAll('option');
    options.forEach((opt, i) => {
      expect(options[i].element.value).toContain(Types[i]);
    });
  });

  it('イベントが発行されたか', async () => {
    const wrapper = mount(ParentComponent);

    await wrapper.setValue('Test');
    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
    expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
    expect(wrapper.emitted('update:modelValue')).toEqual([['Test']]);
  });
});
