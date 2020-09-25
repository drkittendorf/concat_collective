import axios from "axios";

export default {
  // Gets all books
  getBookmarks: function() {
    return axios.get("/api/resources");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/resources" + id);
  },
  // Deletes the book with the given id
  deleteBookmarks: function(id) {
    return axios.delete("/api/resources" + id);
  },
  // Saves a book to the database
  saveBookmarks: function(bookData) {
    return axios.post("/api/resources", bookData);
  }
};


