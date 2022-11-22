import { CoreDiv, Gap } from 'types';
import { GridNumber } from './GridNumber';

export type GridProps = CoreDiv & {
  container?: boolean;
  xs?: GridNumber;
  sm?: GridNumber;
  md?: GridNumber;
  lg?: GridNumber;
  xl?: GridNumber;
  gap?: Gap;
  gapX?: Gap;
  gapY?: Gap;
  center?: boolean;
};
