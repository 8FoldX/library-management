# Copyright (c) 2026, NITESH and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Librarian(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		email: DF.Date | None
		joining_date: DF.Date
		librarian_name: DF.Data
		phone: DF.Phone | None
		status: DF.Literal["Active", "In-Active", "On-Leave"]
	# end: auto-generated types

	_DOCTYPE_NAME = "Librarian"
