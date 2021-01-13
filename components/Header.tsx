import { Avatar } from 'primereact/avatar';
import { TabMenu } from 'primereact/tabmenu';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 2rem;
  margin: 10px;
  position: relative;
  bottom: 20px;
`;

const items = [
  { label: 'Articles', icon: 'pi pi-align-left' },
  { label: 'About' },
];

const Header = () => {
  const [activeItem, setActiveItem] = useState(items[0]);

  return (
    <Wrapper>
      <Avatar image="/static/profile.png" shape="circle" size="xlarge" />
      <Title>BeLeap Blog</Title>
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
