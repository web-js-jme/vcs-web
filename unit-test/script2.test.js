import { doWhat } from "./scripts2";

const { doWhat, doSomething } = require('./scripts2');

test('do what expected to be called', () => {
    const doWhatMockup = jest.fn();
    doWhat(doWhatMockup);
    expect(doWhatMockup).toHaveBeenCalled();
});

test('cheeck if dowhat has any arguments', () => {
    const doWhatMockup = jest.fn();
    doWhat(doWhatMockup);
    expect(doWhatMockup).toHaveBeenCalledWith('any', 'none');
});

test('cheeck if dowhat has any arguments', () => {
    const mockupFuncyion = jest.fn();
    mockupFuncyion.mockReturnValue('reiksme');
    expect(doWhatMockup).toHaveBeenCalledWith('any', 'none');
});