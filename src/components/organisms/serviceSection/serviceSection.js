import React from 'react';
import ServiceCard from '../../molecules/serviceCard/ServiceCard';
import { Container, RowInner, RowInnerWrapper, } from './styled';

export default function ServiceSection() {
  return (
    <Container>
      <RowInnerWrapper>
        <RowInner>
          <ServiceCard />
        </RowInner>
      </RowInnerWrapper>
    </Container>
  );
}
