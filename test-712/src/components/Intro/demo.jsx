import React from 'react';
import {useMediaQuery} from './demo2'

export const MyComponent = () => {
  const isRowBased = useMediaQuery('(min-width: 500px)');
  
  return (
    <div style={styles.container(isRowBased)}>
      <div>First item</div>
      <div>Second item</div>
    </div>);
};

const styles = {
  container: isRowBased => ({
    display: 'flex',
    flexDirection: isRowBased ? 'row' : 'column',
    justifyContent: 'space-around'
  })
};

