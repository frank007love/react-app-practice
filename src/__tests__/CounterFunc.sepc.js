import CounterFunc from "../CounterFunc";
import {cleanup} from 'react-testing-library';
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';


describe('<CounterFunc>',()=>{
    afterEach(cleanup);

    it('CounterFunc snapshot', () => {
        const tree = renderer.create(<CounterFunc/>).toJSON()
        expect(tree).toMatchSnapshot();
    })

    it('Test CounterFunc content', ()=>{
        const counterFunc = shallow(<CounterFunc/>);
        expect(counterFunc.find('div').text()).toBe('This is a example: 0.');
    });

    // Can't work with React-Hook
    // it('Test click button of CounterFunc', ()=>{
    //     const [ container, rerender ] = render(<CounterFunc/>);
    //     counterFunc.find('button').simulate('click');
    //     expect(counterFunc.find('div').text()).toBe('This is a example: 1.');
    // });

    it('Test click button of CounterFunc', ()=>{
        const test_instance = renderer.create(<CounterFunc/>).root;
        console.log(test_instance.findByType('div'));
    });
});