import React from 'react';
import { DesktopNavBar } from '../components';

export const Desktop: React.FC = ({ children }) => {
    return (
        <div>
            <DesktopNavBar />
            <div style={{ marginTop: '56px' }}>
                {children}
            </div>
        </div>
    );
};
