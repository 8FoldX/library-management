# Copyright (c) 2026, NITESH and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Member(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		email_address: DF.Data | None
		full_address: DF.SmallText | None
		full_name: DF.Data
		member_status: DF.Literal["Active", "In-Active", "Expired", "Suspended", "Cancelled"]
		phone_number: DF.Phone
	# end: auto-generated types

	_DOCTYPE_NAME = "Library Member"
