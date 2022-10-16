import { triProgress } from './index';
import { html } from "lit-html";

export default {
  title: 'Components/Progress',
  component: triProgress,
  argTypes: {
    paused: {
      control: { type: 'boolean' },
    },
  },
};

const Template = () => html` <fast-tri-progress></fast-tri-progress>`;
export const Primary = Template.bind({});
Primary.args = {
};

