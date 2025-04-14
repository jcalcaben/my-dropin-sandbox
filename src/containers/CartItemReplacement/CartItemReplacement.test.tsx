/** https://preactjs.com/guide/v10/preact-testing-library/ */

import { render } from '@adobe-commerce/elsie/lib/tests';

import { CartItemReplacement } from '@/my-sandbox/containers/CartItemReplacement';

describe('my-sandbox/Containers/CartItemReplacement', () => {
  test('renders', () => {
    const { container } = render(<CartItemReplacement />);

    expect(!!container).toEqual(true);
  });
});
