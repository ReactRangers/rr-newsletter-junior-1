import React from 'react';
import ReactDOM from 'react-dom';
import PractiseRange from './PractiseRange';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PractiseRange />, div);
    ReactDOM.unmountComponentAtNode(div);
});
