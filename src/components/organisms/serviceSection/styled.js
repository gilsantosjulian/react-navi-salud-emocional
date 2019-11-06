import Styled from 'styled-components';

export const Container = Styled.div`
  background-color: rgba(245,245,245, 1.00);
  padding-top: 6%;
  padding-bottom: 3%;
`;

export const RowInnerWrapper = Styled.div`
  position: relative;
  width: 100%;
`;

export const RowInner = Styled.div`
  width: 1160px;
  max-width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 681px) {
    display: flex;
    flex-flow: wrap;
  }

  @media screen and(max-width: 760px) {
    max-width: 90%;
    font-size: .95em;
  }

  @media screen and(max-width: 1200px) {
    max-width: 96%;
    font-size: 1em;
  }
`;
