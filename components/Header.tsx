import { TabMenu } from 'primereact/tabmenu';
import { useState } from 'react';

const items = [
  { label: 'Articles', icon: 'pi pi-fw pi-align-left' },
  { label: 'About' },
];

const Header = () => {
  const [activeItem, setActiveItem] = useState(items[0]);
  return (
    <TabMenu
      model={items}
      activeItem={activeItem}
      onTabChange={(event) => {
        setActiveItem(event.value);
      }}
    />
  );
};

export default Header;
