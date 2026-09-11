# Copyright (c) 2026, NITESH and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Membership(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		form_date: DF.Date | None
		membership: DF.Link
		membership_status: DF.Literal["Active", "Expired", "Suspended", "Cancelled"]
		to_date: DF.Date | None
	# end: auto-generated types

	_DOCTYPE_NAME = "Library Membership"
