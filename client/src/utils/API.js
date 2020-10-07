import axios from "axios";

export default {
  
  // // Deletes the book with the given id
  deleteBookmarks: function(id) {
    return axios.delete("/api/resources/" + id);
  },
  
  
  // // Deletes the book with the given id
  deleteSnippets: function(id) {
    return axios.delete("/api/snippets" + id);
  },

  createUser: (userData) => axios.post(`api/userAPI`, userData),
  getBookmarks: () => axios.get("/api/resources"),
  getSnippets: () => axios.get("/api/snippets"),

  // Saves a book to the database / gota check the id of the user 
  saveBookmarks: (bookId, userId) =>  axios.post(`/api/userAPI/boomarkCards/${bookId}`, userId), 
  saveCodeCards: (cardId, userId) =>  axios.post(`/api/userAPI/codeCards/${cardId}`, userId), 
  getUsersByEmail: () => axios.get(`/api/userAPI`)

};



