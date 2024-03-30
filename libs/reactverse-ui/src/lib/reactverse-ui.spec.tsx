import { render } from '@testing-library/react';

import ReactverseUi from './reactverse-ui';

describe('ReactverseUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactverseUi />);
    expect(baseElement).toBeTruthy();
  });
});
