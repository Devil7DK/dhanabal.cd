import React from 'react';
import { DesktopNavBar } from '../components';

export const Desktop: React.FC = ({ children }) => {
    return (
        <div>
            <DesktopNavBar />
            <div>
                {children}
            </div>
        </div>
    );
};
