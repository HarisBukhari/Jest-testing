// import { sum } from './sum'
const sum = require('./sum')

test('Sum (1,2) should return 3',()=>{
    expect(sum(1,2)).toBe(3)
})