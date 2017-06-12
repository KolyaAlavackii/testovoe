import React from 'react';

import NavBarContainer from '../containers/NavBarContainer';
import DitailsLocationContainer from '../containers/DitailsLocationContainer';

const App = () => {
        return (
                <div className='app'>
                    <NavBarContainer />
                    <DitailsLocationContainer />
                </div>
        );
    }

export default App;