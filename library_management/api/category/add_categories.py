import frappe


@frappe.whitelist(allow_guest=True)
def add_category(category: str, image: str | None = None):

    category_doc = frappe.get_doc(
        {
            "doctype": "Category",
            "category": category,
            "image": image,
        }
    )

    category_doc.insert(ignore_permissions=True)

    frappe.db.commit()

    return {
        "success": True,
        "message": "Category added successfully",
        "name": category_doc.name,
        "category": category_doc.category,
        "image": category_doc.image,
    }