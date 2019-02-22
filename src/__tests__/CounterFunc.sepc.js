import CounterFunc from "../CounterFunc";
import {render, fireEvent, cleanup} from 'react-testing-library';
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';


describe('<CounterFunc>',()=>{
    afterEach(cleanup);

    it('CounterFunc snapshot', () => {
        const tree = renderer.create(<CounterFunc/>).toJSON()
        expect(tree).toMatchSnapshot();
    })

    // //Can't work with React-Hook
    // it('Test click button of counterFunc', ()=>{
    //     const counterFunc = shallow(<CounterFunc/>);
    //     counterFunc.find('button').simulate('click');
    //     expect(counterFunc.find('div').text()).toBe('This is a example: 1.');
    // });

    it('Test click button of counterFunc', ()=>{
        const utils = render(<CounterFunc/>);
        const display = utils.getByLabelText('counter-val');
        const button = utils.getByText('count+1');

        fireEvent.click(button);
        expect(display.textContent).toBe('This is a example: 1.');
    });
});