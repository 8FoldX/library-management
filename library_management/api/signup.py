import frappe
from frappe import _


@frappe.whitelist(allow_guest=True)
def signup(email: str, password: str, full_name: str):

    if not email:
        frappe.throw(_("Email is required"))

    if not password:
        frappe.throw(_("Password is required"))

    if not full_name:
        frappe.throw(_("Full name is required"))

    # Check if user already exists
    if frappe.db.exists("User", email):
        frappe.throw(_("User already exists"))

    # Create Frappe User
    user = frappe.get_doc({
        "doctype": "User",
        "email": email,
        "first_name": full_name,
        "enabled": 1,
        "send_welcome_email": 0,
        "new_password": password
    })

    user.insert(ignore_permissions=True)

    return {
        "status": "Success",
        "message": "Account created successfully",
        "user": email
    }