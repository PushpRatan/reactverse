import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { Button as ButtonUi } from './button';

const meta: Meta<typeof ButtonUi> = {
  component: ButtonUi,
  title: 'Button',
};
export default meta;

type Story = StoryObj<typeof ButtonUi>;

export const Primary: Story = {
  args: {
    text: 'Button',
    padding: 0,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to MyButton!/gi)).toBeTruthy();
  },
};
