export default {

    toObject: (arr) => arr.reduce((acc, post) => ({ ...acc, [post._id]: { ...post } }), {}),

    // way to make these two into one 
    toObjectByEmail: (arr) => arr.reduce((acc, post) => ({ ...acc, [post.email]: { ...post } }), {}),

    toArray: (obj) => Object.values(obj)
}



