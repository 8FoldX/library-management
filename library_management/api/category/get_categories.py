import frappe


@frappe.whitelist(allow_guest=True)
def get_categories():

    categories = frappe.get_all(
        "Category",
        fields=[
            "image",
            "category",
        ],
        order_by="creation desc",
    )

    return categories