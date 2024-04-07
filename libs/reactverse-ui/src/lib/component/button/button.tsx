import styles from './button.module.scss';
import { Button as Btn } from '../../../ui/button';

/* eslint-disable-next-line */
export interface ButtonProps {
  text: string;
  padding: number;
  disabled: boolean;
}

export function Button(props: ButtonProps) {
  return (
    <Btn disabled={props.disabled} style={{ padding: props.padding }}>
      {props.text}
    </Btn>
  );
}
