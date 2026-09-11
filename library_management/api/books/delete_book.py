import frappe


@frappe.whitelist()
def delete_book(name):
    frappe.delete_doc(
        "Book",
        name,
        ignore_permissions=True,
    )

    frappe.db.commit()

    return {
        "success": True,
        "message": "Book deleted successfully",
    }