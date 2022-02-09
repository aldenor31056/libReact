import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FireflyCheckbox from './FireflyCheckbox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Firefly/FireflyCheckbox',
  component: FireflyCheckbox,
} as ComponentMeta<typeof FireflyCheckbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FireflyCheckbox> = (args) => <FireflyCheckbox {...args} />;

export const Check_1 = Template.bind({});
Check_1.args = {
  value: '1',
  label: "0001",
  id: "ck-1",
  name: "ck-1",
};

export const Check_2 = Template.bind({});

Check_2.args = {
  value: '2',
  id: "ck-2",
  name: "ck-2",
  label: "0002",
  disabled: true
};
