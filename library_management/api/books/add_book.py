import frappe


@frappe.whitelist(allow_guest=True)
def add_book(
    book_title: str,
    author: str = None,
    category: str = None,
    edition: str = None,
    isbn: str = None,
    publisher: str = None,
    cover_image: str = None,
):

    book = frappe.get_doc(
        {
            "doctype": "Book",
            "book_title": book_title,
            "author": author,
            "category": category,
            "edition": edition,
            "isbn": isbn,
            "publisher": publisher,
            "cover_image": cover_image,
        }
    )

    book.insert(ignore_permissions=True)

    frappe.db.commit()

    return {
        "success": True,
        "message": "Book added successfully",
        "name": book.name,
        "book_title": book.book_title,
    }