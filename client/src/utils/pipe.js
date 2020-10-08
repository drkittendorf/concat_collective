export default {

    pipe: (...fns) => (x) => fns.reduce((y, fn) => fn(y), x)

}