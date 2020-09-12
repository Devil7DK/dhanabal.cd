import React from 'react';
import { Image, Menu } from 'semantic-ui-react';

export const DesktopNavBar: React.FC = () => {
    return (
        <Menu fixed='top' borderless pointing>
            <Menu.Item as='a' header><Image style={{ marginRight: '1.5em' }} src='/logo.png' size='mini' />C. DHANABAL</Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item as='a' header >Home</Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};
