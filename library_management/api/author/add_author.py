import frappe


@frappe.whitelist(allow_guest=True)
def add_author(book_author: str):

    author = frappe.get_doc(
        {
            "doctype": "Author",
            "book_author": book_author,
        }
    )

    author.insert(ignore_permissions=True)

    frappe.db.commit()

    return {
        "success": True,
        "message": "Author added successfully",
        "name": author.name,
        "book_author": author.book_author,
    }