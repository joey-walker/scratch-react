//move this to webpack loader
require("file-loader?name=[name].[ext]!../public/index.html");

import React from 'react';
import {render} from 'react-dom';
import ScratchComponent from './scratchComponent.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Anything here?</p>
                <ScratchComponent/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));