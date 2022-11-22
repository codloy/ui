import { Color, CoreDiv } from 'types';

export type AlertProps = CoreDiv & {
  color?: Color;
  title?: string;
  icon?: JSX.Element;
  actions?: JSX.Element;
};
