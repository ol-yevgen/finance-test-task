import React from 'react';
import { Provider } from 'react-redux';

import { setupStore } from '../../redux/store';

function Providers({ children }) {
    return (
        <Provider store={setupStore()}>{children}</Provider>
    );
}

export default Providers;
