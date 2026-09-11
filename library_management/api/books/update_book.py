import frappe


@frappe.whitelist(allow_guest=True)
def update_book(
    name: str,
    book_title: str,
    author: str,
    category: str,
    edition: str,
    isbn: str | None = None,
    publisher: str | None = None,
    cover_image: str | None = None,
):

    # Check if book exists
    if not frappe.db.exists("Book", name):
        frappe.throw(f"Book '{name}' not found")

    # Get existing book
    book = frappe.get_doc("Book", name)

    # Update fields
    book.book_title = book_title
    book.author = author
    book.category = category
    book.edition = edition
    book.isbn = isbn
    book.publisher = publisher

    # Only update image if a new image was provided
    if cover_image:
        book.cover_image = cover_image

    # Save changes
    book.flags.ignore_permissions = True
    book.save()

    # Rename document if title/name changed
    if name != book_title:

        # Check duplicate title
        if frappe.db.exists("Book", book_title):
            frappe.throw(
                f"A book with title '{book_title}' already exists"
            )

        # Rename using administrator context
        frappe.set_user("Administrator")

        frappe.rename_doc(
            "Book",
            name,
            book_title,
            force=True,
        )

    frappe.db.commit()

    return {
        "success": True,
        "message": "Book updated successfully",
        "name": book_title,
    }