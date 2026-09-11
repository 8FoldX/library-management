import frappe


@frappe.whitelist(allow_guest=True)
def add_publisher(publisher_name: str):

    publisher_doc = frappe.get_doc(
        {
            "doctype": "Publisher",
            "publisher_name": publisher_name,
        }
    )

    publisher_doc.insert(ignore_permissions=True)

    frappe.db.commit()

    return {
        "success": True,
        "message": "Publisher added successfully",
        "name": publisher_doc.name,
        "publisher_name": publisher_doc.publisher_name,
    }