// Test away!
//displays if gate is open/closed and if it is locked/unlocked
//displays 'Closed' if the closed prop is true and 'Open' if otherwise
//displays 'Locked' if the locked prop is true and 'Unlocked' if othewise
//when locked or closed use the red-led class
//when unlocked or open use the green-led class

import React from 'react';
import { render } from 'react-testing-library';

import Display from './Display';

describe('The display component', () =>{
    it('displays if the gate is open or closed', () =>{
        const {getByText} = render(<Display locked ={false} closed ={false}/> );

        getByText(/Unlocked/i);
        getByText(/Open/i);
    })
})