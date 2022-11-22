import { Border, Color, CoreButton, Size } from 'types';
import { ButtonType } from './ButtonType';

export type ButtonProps = Omit<CoreButton, 'size' | 'type'> & {
  size?: Size;
  border?: Border;
  color?: Color;
  type?: ButtonType;
  full?: boolean;
  loading?: boolean;
  submit?: boolean;
  reset?: boolean;
  icon?: JSX.Element;
  endIcon?: JSX.Element;
};
