import Counter from '../Counter';
import { CountCtx } from "../Example";
import {render, fireEvent, cleanup} from 'react-testing-library';
import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

function CounterComp(){
    const [ count, setCount ] = useState(0);
    return <CountCtx.Provider value={[count, setCount]}><Counter/></CountCtx.Provider>;
}


describe('<Counter>',()=>{
    afterEach(cleanup);

    it('Counter snapshot', () => {
        const tree = renderer.create(<CounterComp/>).toJSON()
        expect(tree).toMatchSnapshot();
    })

    it('Counter should be added after clicking the button', ()=>{
        //const {queryByLabelText, getByLabelText} = render(<CounterComp/>);
        
        
        //const counter = shallow(<CounterComp/>);
        //expect(counter.find('div').text()).toBe('Counter is 0');
        
        //counter.find('button').simulate('click');
        //expect(counter.find('div').text()).toBe('Counter is 5');
        // console.log(form.find('Button'));
        // expect(form.find('Button').prop('disabled')).toBe(true);
        //expect(form.find('button').props()["disabled"]).toBe(true);
    });
});