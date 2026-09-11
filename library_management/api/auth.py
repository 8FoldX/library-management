import frappe


@frappe.whitelist(allow_guest=True)
def get_current_user():
    user = frappe.session.user

    if user == "Guest":
        return {
            "logged_in": False,
            "user": None,
            "full_name": None,
            "roles": [],
        }

    return {
        "logged_in": True,
        "user": user,
        "full_name": frappe.db.get_value(
            "User",
            user,
            "full_name"
        ),
        "roles": frappe.get_roles(user),
    }


@frappe.whitelist(allow_guest=True)
def logout():
    frappe.local.login_manager.logout()

    return {
        "success": True,
        "message": "Logged out successfully",
    }