# Copyright (c) 2026, NITESH and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Issue(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		amended_from: DF.Link | None
		issue: DF.Literal["Regular Issue", "Renewal", "Re-Issue", "Reference Issue", "Teacher Issue", "Classroom Issue"]
		issue_date: DF.Date
		member: DF.Link
		return_date: DF.Date
	# end: auto-generated types

	_DOCTYPE_NAME = "Issue"
