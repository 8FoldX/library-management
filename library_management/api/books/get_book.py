import frappe


@frappe.whitelist(allow_guest=True)
def get_book(book_title: str):
    book_name = frappe.db.get_value(
        "Book",
        {"book_title": book_title},
        "name"
    )

    if not book_name:
        frappe.throw(f"Book '{book_title}' not found")

    book = frappe.get_doc("Book", book_name)

    return {
        "name": book.name,
        "book_title": book.book_title,
        "isbn": book.isbn,
        "edition": book.edition,
        "cover_image": book.cover_image,
        "author": book.author,
        "category": book.category,
        "publisher": book.publisher,
    }