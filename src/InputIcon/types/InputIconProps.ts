import { CoreDiv, Size } from 'types';
import { InputIconPosition } from './InputIconPosition';

export type InputIconProps = CoreDiv & {
  position?: InputIconPosition;
  size?: Size;
};
