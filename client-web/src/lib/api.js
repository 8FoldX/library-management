import axios from "axios";

const frappe = axios.create({
  baseURL: "/api/frappe",

  withCredentials: true,

  headers: {
    Accept: "application/json",
  },
});

export const API_PATHS = {
  // ================= BOOKS =================
  BOOKS: {
    GET: "/library_management.api.books.get_books.get_books",

    GET_SINGLE:
      "/library_management.api.books.get_book.get_book",

    ADD: "/library_management.api.books.add_book.add_book",

    UPDATE:
      "/library_management.api.books.update_book.update_book",

    DELETE:
      "/library_management.api.books.delete_book.delete_book",
  },

  // ================= AUTHORS =================
  AUTHORS: {
    GET: "/library_management.api.author.get_authors.get_authors",

    ADD: "/library_management.api.author.add_author.add_author",

    DELETE:
      "/library_management.api.author.delete_author.delete_author",
  },

  // ================= CATEGORIES =================
  CATEGORIES: {
    GET:
      "/library_management.api.category.get_categories.get_categories",

    ADD:
      "/library_management.api.category.add_category.add_categories",
  },

  // ================= PUBLISHERS =================
  PUBLISHERS: {
    GET:
      "/library_management.api.publisher.get_publishers.get_publishers",

    ADD:
      "/library_management.api.publisher.add_publisher.add_publisher",
  },
};

export default frappe;