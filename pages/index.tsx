import { NextComponentType } from 'next/dist/next-server/lib/utils';
import styled from 'styled-components';
import Header from '../components/Header';

const Wrapper = styled.div`
  margin: 10px;
`;

const Index: NextComponentType = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

export default Index;
