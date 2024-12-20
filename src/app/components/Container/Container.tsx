import {ReactNode} from 'react';
import styles from './style.module.scss';

type ContainerProps = {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}