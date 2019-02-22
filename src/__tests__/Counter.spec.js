import Counter from '../Counter';
import { CountCtx } from "../Example";
import {render, fireEvent, cleanup} from 'react-testing-library';
import React, { useState, useEffect } from 'react';
import renderer from 'react-test-renderer';

describe('<Counter>',()=>{
    afterEach(cleanup);

    let countVal = 0;
    function CounterComp(){
        const [ count, setCount ] = useState(0);
        useEffect(()=>{
            countVal = count;
        });
        return <CountCtx.Provider value={[count, setCount]}><Counter/></CountCtx.Provider>;
    }
    
    it('Counter snapshot', () => {
        const tree = renderer.create(<CounterComp/>).toJSON()
        expect(tree).toMatchSnapshot();
    })

    it('Counter should be added after clicking the button', ()=>{
        const utils = render(<CounterComp/>);
        const display = utils.getByLabelText('counter-val');
        const button = utils.getByText('child button +5');

        fireEvent.click(button);
        expect(display.textContent).toBe('Counter is 5');
        expect(countVal).toBe(5);
    });
});