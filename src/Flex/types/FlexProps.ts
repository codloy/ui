import { CoreDiv, Gap } from 'types';
import { FlexDirection } from './FlexDirection';

export type FlexProps = CoreDiv & {
  direction?: FlexDirection;
  gap?: Gap;
};
