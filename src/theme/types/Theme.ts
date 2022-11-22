import { AccordionProps } from '../../Accordion';
import { AccordionsProps } from '../../Accordions';
import { AddonProps } from '../../Addon';
import { AlertProps } from '../../Alert';
import { AnchorProps } from '../../Anchor';
import { AvatarProps } from '../../Avatar';
import { AvatarsProps } from '../../Avatars';
import { ButtonProps } from '../../Button';
import { CardProps } from '../../Card';
import { FlexProps } from '../../Flex';
import { FormProps } from '../../Form';
import { GridProps } from '../../Grid';
import { HeadingProps } from '../../Heading';
import { HelperProps } from '../../Helper';
import { InputProps } from '../../Input';
import { InputIconProps } from '../../InputIcon';
import { LabelProps } from '../../Label';
import { LoadingIconProps } from '../../LoadingIcon';
import { MainProps } from '../../Main';
import { NavProps } from '../../Nav';
import { ParagraphProps } from '../../Paragraph';

export interface Theme {
  component?: {
    Accordion?: { props?: AccordionProps };
    Accordions?: { props?: AccordionsProps };
    Addon?: { props?: AddonProps };
    Alert?: { props?: AlertProps };
    Anchor?: { props?: AnchorProps };
    Avatar?: { props?: AvatarProps };
    Avatars?: { props?: AvatarsProps };
    Button?: { props?: ButtonProps };
    Card?: { props?: CardProps };
    Flex?: { props?: FlexProps };
    Form?: { props?: FormProps };
    Grid?: { props?: GridProps };
    Heading?: { props?: HeadingProps };
    Helper?: { props?: HelperProps };
    Input?: { props?: InputProps };
    InputIcon?: { props?: InputIconProps };
    Label?: { props?: LabelProps };
    LoadingIcon?: { props: LoadingIconProps };
    Main?: { props?: MainProps };
    Nav?: { props?: NavProps };
    Paragraph?: { props?: ParagraphProps };
  };
}
