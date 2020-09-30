export default {

    toObject: (arr) => arr.reduce((acc, post) => ({ ...acc, [post._id]: { ...post } }), {}),
    toArray: (obj) => Object.values(obj)
}

