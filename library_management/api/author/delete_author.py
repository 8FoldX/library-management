import frappe


@frappe.whitelist(allow_guest=True)
def delete_author(name: str):

    author = frappe.get_doc(
        "Author",
        name
    )

    author.delete(ignore_permissions=True)

    frappe.db.commit()

    return {
        "success": True,
        "message": "Author deleted successfully",
    }