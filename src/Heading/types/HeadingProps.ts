import { CoreHeading } from 'types';
import { HeadingAlign } from './HeadingAlign';
import { HeadingType } from './HeadingType';

export type HeadingProps = CoreHeading & {
  type?: HeadingType;
  align?: HeadingAlign;
};
