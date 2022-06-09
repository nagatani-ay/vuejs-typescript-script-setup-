import RadioButton from '../RadioButton.vue';
import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';

const ParentComponent = {
  components: { RadioButton },
  template: `<radio-button
  v-for="type in Types"
  :key="type"
  v-model="selectValue"
  :itemType="type"
  group = "Filter" ></radio-button>`,
  data() {
    return {
      selectValue: '全',
      Types: ['全', '済', '未'],
    };
  },
};

describe('RadioButton', () => {
  it('オプションを生成', async () => {
    const Types = ['全', '済', '未'];
    const wrapper = mount(ParentComponent);
    console.log(wrapper.html());
    const options = wrapper.findAll('option');
    options.forEach((opt, i) => {
      expect(options[i].element.value).toContain(Types[i]);
    });
  });
  it('値の変更', async () => {
    const wrapper = mount(ParentComponent);

    const buttons = wrapper.findAll('input');
    expect(buttons[0].element.checked).toEqual(true);
    expect(buttons[1].element.checked).toEqual(false);
    expect(buttons[2].element.checked).toEqual(false);

    await wrapper.find('[value="未"]').trigger('click');
    expect(buttons[0].element.checked).toEqual(false);
    expect(buttons[1].element.checked).toEqual(false);
    expect(buttons[2].element.checked).toEqual(true);
  });
  // it('クリックによる値の変更', async () => {
  //   const wrapper = mount(RadioButton, {
  //     props: {
  //       modelValue: '済',
  //       itemType: '全',
  //     },
  //   });
  //   const input = wrapper.find('input');
  //   await input.trigger('click');
  //   expect(input.element.checked).toBe(true);
  // });
  // it('イベントが発行されたか', async () => {
  //   const wrapper = mount(RadioButton, {
  //     props: {
  //       modelValue: '済',
  //       itemType: '全',
  //     },
  //   });
  //   wrapper.vm.$emit('update:modelValue');
  //   expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  // });
});
