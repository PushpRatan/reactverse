import styles from './reactverse-ui.module.scss';

/* eslint-disable-next-line */
export interface ReactverseUiProps {}

export function ReactverseUi(props: ReactverseUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactverseUi!</h1>
    </div>
  );
}

export default ReactverseUi;
