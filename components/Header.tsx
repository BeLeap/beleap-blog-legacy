import { TabMenu } from 'primereact/tabmenu';
import styled from 'styled-components';
import React, { useState } from 'react';

const ProfileImage = styled.img`
    border-radius: 400px;
    width: 40px;
    height: 40px;
    margin: 10px;
`;

const Header = () => {
    const [activeItem, setActiveItem] = useState({ activeItem: 0 });

    return (
        <>
            <ProfileImage src="./images/profile.png" />
            <TabMenu
                className={'temp'}
                model={[
                    { label: 'Articles', url: '/' },
                    { label: 'About', url: '/about' },
                ]}
                activeItem={activeItem}
                onTabChange={(event) =>
                    setActiveItem({ activeItem: event.value })
                }
            />
        </>
    );
};

export default Header;
