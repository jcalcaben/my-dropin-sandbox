import { HTMLAttributes } from 'preact/compat';
import { Container } from '@adobe-commerce/elsie/lib';

export interface TestContainerProps extends HTMLAttributes<HTMLDivElement> {}
    
export const TestContainer: Container<TestContainerProps> = ({ children, ...props }) => {
  return (
    <div {...props}>
      Hello World!
    </div>
  );
};
