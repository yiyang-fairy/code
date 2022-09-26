const a = {
    name: 'h',
    age: 12
}

const clone = (obj) => {
    const _obj = Array.isArray(obj) ? [] : {};
    if(typeof obj == 'object') {
        for(key in obj) {
            if(typeof key == 'object') {
                _obj[key] = clone(obj[key])
            }
            else {
                _obj[key] = obj[key]
            }
        }
    }
    return obj
}
const c = [1, 2, 3, {one: 1, two: 2}]
const d = {
    one: 1,
    two: [1, 2, 3],
    three: {
        first: 0,
        second: 0
    }
}
const b = clone(d)
console.log("b",b)