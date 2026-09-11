import frappe


@frappe.whitelist(allow_guest=True)
def get_authors():

    authors = frappe.get_all(
        "Author",
        fields=[
            "book_author",
        ],
        order_by="creation desc",
    )

    return authors