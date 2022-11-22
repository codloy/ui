import { CoreSpan, Status } from 'types';
import { AddonPosition } from './AddonPosition';

export type AddonProps = CoreSpan &
  Status & {
    position?: AddonPosition;
  };
