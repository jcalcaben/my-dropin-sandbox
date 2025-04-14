/** https://preactjs.com/guide/v10/preact-testing-library/ */

import { render } from '@adobe-commerce/elsie/lib/tests';

import { TestContainer } from '@/my-sandbox/containers/TestContainer';

describe('my-sandbox/Containers/TestContainer', () => {
  test('renders', () => {
    const { container } = render(<TestContainer />);

    expect(!!container).toEqual(true);
  });
});
