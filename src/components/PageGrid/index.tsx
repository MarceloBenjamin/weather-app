import { BoxProps, GridProps } from '@mui/material';
import React, { ReactNode } from 'react';

import { Container, ContainerGrid } from './styles';

interface Props {
  children?: ReactNode | ReactNode[];
  boxProps?: BoxProps;
  gridProps?: GridProps;
}

const PageGrid: React.FC<Props> = ({
  children,
  boxProps,
  gridProps,
}: Props) => (
  <Container {...boxProps}>
    <ContainerGrid container {...gridProps}>
      {children}
    </ContainerGrid>
  </Container>
);
export default PageGrid;
