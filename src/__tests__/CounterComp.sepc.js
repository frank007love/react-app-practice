import CounterComp from "../CounterComp";
import {cleanup} from 'react-testing-library';
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';


describe('<CounterComp>',()=>{
    afterEach(cleanup);

    it('CounterComp snapshot', () => {
        const tree = renderer.create(<CounterComp/>).toJSON()
        expect(tree).toMatchSnapshot();
    })

    it('Test CounterComp content', ()=>{
        const counterComp = shallow(<CounterComp/>);
        expect(counterComp.find('div').text()).toBe('This is a example: 0.');
    });

    it('Test button of CounterComp', ()=>{
        const counterComp = shallow(<CounterComp/>);
        counterComp.find('button').simulate('click');
        expect(counterComp.find('div').text()).toBe('This is a example: 1.');
    });
});