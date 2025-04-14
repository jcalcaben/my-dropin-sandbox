// https://storybook.js.org/docs/7.0/preact/writing-stories/introduction
import type { Meta, StoryObj } from '@storybook/preact';
import { CartItemReplacement as component, CartItemReplacementProps } from '@/my-sandbox/containers/CartItemReplacement';

const meta: Meta<CartItemReplacementProps> = {
  title: 'Containers/CartItemReplacement',
  component,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // centered | fullscreen
  },
};

export default meta;

type Story = StoryObj<CartItemReplacementProps>;

/**
 * ```ts
 * import { CartItemReplacement } from '@/my-sandbox/containers/CartItemReplacement';
 * ```
 */

export const CartItemReplacement: Story = {
  args: {
    children: "👋 Howdy, I'm Howdy!",
  },
};
