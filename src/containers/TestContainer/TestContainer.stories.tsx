// https://storybook.js.org/docs/7.0/preact/writing-stories/introduction
import type { Meta, StoryObj } from '@storybook/preact';
import { TestContainer as component, TestContainerProps } from '@/my-sandbox/containers/TestContainer';

const meta: Meta<TestContainerProps> = {
  title: 'Containers/TestContainer',
  component,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // centered | fullscreen
  },
};

export default meta;

type Story = StoryObj<TestContainerProps>;

/**
 * ```ts
 * import { TestContainer } from '@/my-sandbox/containers/TestContainer';
 * ```
 */

export const TestContainer: Story = {
  args: {
    children: "👋 Howdy, I'm Howdy!",
  },
};
