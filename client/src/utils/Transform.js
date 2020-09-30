export default {

    toObject: (arr) => arr.reduce((acc, post) => ({ ...acc, [post.id]: { ...post } }), {}),
    
    toArray: (obj) => Object.values(obj)
}

