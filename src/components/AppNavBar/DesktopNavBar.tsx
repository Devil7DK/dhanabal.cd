import React, { ReactNode } from 'react';
import { History } from 'history';
import { useHistory } from 'react-router';
import { Image, Menu, Icon } from 'semantic-ui-react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';
import { NavLinks } from './NavLinks';

export const DesktopNavBar: React.FC = () => {
    const history: History = useHistory();
    return (
        <Menu fixed='top' borderless>
            <Menu.Item as='a' header><Image style={{ marginRight: '1.5em' }} src='/logo.png' size='mini' />C. DHANABAL</Menu.Item>
            <Menu.Menu position='right'>
                {
                    NavLinks.map<ReactNode>(link =>
                        <Menu.Item active={history.location.pathname.startsWith(link.pathname)} onClick={() => history.push(link.pathname)} link>
                            <Icon name={link.icon as SemanticICONS} />{link.text}
                        </Menu.Item>
                    )
                }
            </Menu.Menu>
        </Menu>
    );
};
