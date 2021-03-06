import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    height: 70px;
    padding: 10px;
    margin-bottom: 40px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
  }
`;

export const OptionsContainer = styled.div`
  font-weight: bold;
  font-size: 20px;
  height: 100%;
  width: 50%;    
  display: flex;
  align-items: center;
  justify-content: flex-end; 

  @media screen and (max-width: 800px) {
    width: 80%;
    font-size: 17px;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;