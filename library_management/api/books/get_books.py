import frappe


@frappe.whitelist(allow_guest=True)
def get_books():

    books = frappe.get_all(
        "Book",
        fields=[
            "name",
            "author",
            "book_title",
            "category",
            "edition",
            "isbn",
            "publisher",
            "cover_image",
        ],
        order_by="creation desc"
    )

    return books
    