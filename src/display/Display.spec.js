// Test away!
//displays if gate is open/closed and if it is locked/unlocked
//displays 'Closed' if the closed prop is true and 'Open' if otherwise
//displays 'Locked' if the locked prop is true and 'Unlocked' if othewise
//when locked or closed use the red-led class
//when unlocked or open use the green-led class

import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect'

import Display from './Display';

afterEach(cleanup)

describe('The display component', () =>{
    it('displays if the gate is unlocked and open when props set to false', () =>{
        const {getByText} = render(<Display locked ={false} closed ={false}/> );

        getByText(/Unlocked/i);
        getByText(/Open/i);
    })

    it('displays if the gate is locked and closed when props set to true', () =>{
        const {getByText} = render(<Display locked ={true} closed ={true}/> );

        getByText(/Locked/i);
        getByText(/Closed/i);
    })

    it('uses red-led when closed and locked', () =>{
        const component = render(<Display locked ={true} closed ={true}/>);
        const closedClass = component.getByTestId('closed-class')
        const lockedClass = component.getByTestId('locked-class')

        expect(closedClass).toHaveAttribute("class", 'led red-led')
        expect(lockedClass).toHaveAttribute("class", 'led red-led')
    })

    it('uses green-led when open and unlocked', () =>{
        const component = render(<Display locked ={false} closed ={false}/>);
        const closedClass = component.getByTestId('closed-class')
        const lockedClass = component.getByTestId('locked-class')

        expect(closedClass).toHaveAttribute("class", 'led green-led')
        expect(lockedClass).toHaveAttribute("class", 'led green-led')
    })
})