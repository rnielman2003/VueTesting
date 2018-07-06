import { mount } from 'vue-test-utils';
import Counter from '../src/components/Counter.vue';
import expect from 'expect';


describe ('Counter', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(Counter);
    });

    it ('defaults to a count of 0', () => {
        expect(wrapper.vm.count).toBe(0);
    });

});