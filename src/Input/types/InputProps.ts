import { AddonPosition } from 'Addon/types';
import { CoreInput, Size, Status } from 'types';
import { InputStatus } from './InputStatus';

export type InputProps = Omit<CoreInput, 'size'> &
  Status & {
    size?: Size;
    status?: InputStatus;
    helper?: string;
    icon?: JSX.Element;
    endIcon?: JSX.Element;
    addon?: string | number;
    addonPosition?: AddonPosition;
    label?: string;
    register?: any;
  };
