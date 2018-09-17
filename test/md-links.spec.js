const {definePathAbs, getUrl,verifyUrl} = require ('../md-links.js');

describe('definePathAbs', ()=>{
    test('debería ser una función', () => {
        expect(typeof(definePathAbs)).toEqual('function');
    })
});

describe('getUrl', ()=>{
    test('debería ser una función', () => {
        expect(typeof(getUrl)).toEqual('function');
    })
});

describe('verifyUrl', ()=>{
    test('debería ser una función', () => {
        expect(typeof(verifyUrl)).toEqual('function');
    })
});