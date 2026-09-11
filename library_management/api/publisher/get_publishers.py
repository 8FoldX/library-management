import frappe


@frappe.whitelist(allow_guest=True)
def get_publishers():

    publishers = frappe.get_all(
        "Publisher",
        fields=[
            "publisher_name",
        ],
        order_by="creation desc",
    )

    return publishers