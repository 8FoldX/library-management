import frappe

@frappe.whitelist(allow_guest=True)
def get_member():
    members = frappe.get_all(
        "Member",
        fields=[
            "name",
            "full_name",
            "phone_number",
            "email_address",
            "full_address",
            "member_status"
        ]
    )

    return {
        "status": "Success",
        "data": members
    }