import Styled from 'styled-components';
import { device, } from '../../../config/device';

export const Wrapper = Styled.nav`
  display: flex;
  align-items: center;
  margin-right: 45px;
  

  @media ${device.tablet} {  
    display: none;
  }
`;
