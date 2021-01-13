import { NextComponentType } from 'next/dist/next-server/lib/utils';
import { Avatar } from 'primereact/avatar';
import Header from '../components/Header';

const Index: NextComponentType = () => {
  return (
    <>
      <Avatar image="static/profile.png" size="xlarge" shape="circle" />
      <Header />
    </>
  );
};

export default Index;
