import axios from "axios";

export default {
  // Gets all books
  getBookmarks: function() {
    return axios.get("/api/resources");
  },
  // Gets the book with the given id
  getBookmarksById: function(id) {
    return axios.get("/api/resources" + id);
  },
  // Deletes the book with the given id
  deleteBookmarks: function(id) {
    return axios.delete("/api/resources" + id);
  },
  // Saves a book to the database
  saveBookmarks: function(bookData) {
    return axios.post("/api/resources", bookData);
  }, 
  getSnippets: function() {
    return axios.get("/api/snippets");
  },
  // Gets the book with the given id
  getSnippetsById: function(id) {
    return axios.get("/api/snippets" + id);
  },
  // Deletes the book with the given id
  deleteSnippets: function(id) {
    return axios.delete("/api/snippets" + id);
  },
  // Saves a book to the database
  saveSnippets: function(bookData) {
    return axios.post("/api/snippets", bookData);
  }, 

};

