import SelectMenu from '../Select.vue';
import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';
const ParentComponent = {
  components: { SelectMenu },
  template: `<SelectMenu v-model="selectValue>`,
  data() {
    return { selectValue: '' };
  },
};

describe('Select', () => {
  it('propsによる値の変更', async () => {
    const wrapper = mount(ParentComponent);
    const select = wrapper.find('select');
    expect(select.element.value).toBe('Text');
    await wrapper.setProps({ modelValue: 'Status' });
    expect(select.element.value).toBe('Status');
  });
  it('イベントが発行されたか', async () => {
    const wrapper = mount(SelectMenu, {
      props: {
        optionList: ['Text', 'Status', 'Time', 'Deadline'],
        label: 'SortType',
        modelValue: 'Text',
      },
    });
    wrapper.vm.$emit('update:modelValue');
    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
    expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
  });
});
