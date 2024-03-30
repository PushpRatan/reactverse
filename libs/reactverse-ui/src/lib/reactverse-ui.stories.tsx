import type { Meta, StoryObj } from '@storybook/react';
import { ReactverseUi } from './reactverse-ui';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ReactverseUi> = {
  component: ReactverseUi,
  title: 'ReactverseUi',
};
export default meta;
type Story = StoryObj<typeof ReactverseUi>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ReactverseUi!/gi)).toBeTruthy();
  },
};
