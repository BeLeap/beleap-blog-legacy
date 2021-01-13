import { Avatar } from 'primereact/avatar';
import { TabMenu } from 'primereact/tabmenu';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  margin-left: 10px;
  margin-right: 10px;
  background-color: white;
  top: 0px;
  width: 100vw;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 2rem;
  margin: 10px;
  position: relative;
  bottom: 20px;
`;

const items = [
  {
    label: 'Articles',
    icon: 'pi pi-align-left',
    command: () => {
      window.location.href = '/';
    },
  },
  {
    label: 'About',
    command: () => {
      window.location.href = '/about';
    },
  },
];

const Header = ({ index }) => {
  const [activeItem, setActiveItem] = useState(items[index]);

  return (
    <Wrapper>
      <span
        onClick={() => {
          window.location.href = '/about';
        }}
      >
        <Avatar image="/images/profile.png" shape="circle" size="xlarge" />
      </span>
      <Title
        onClick={() => {
          window.location.href = '/';
        }}
      >
        BeLeap Blog
      </Title>
      <TabMenu
        model={items}
        activeItem={activeItem}
        onTabChange={(event) => {
          setActiveItem(event.value);
        }}
      />
    </Wrapper>
  );
};

export default Header;
