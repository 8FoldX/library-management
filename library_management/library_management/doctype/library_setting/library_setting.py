# Copyright (c) 2026, NITESH and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class LibrarySetting(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		fine_rate: DF.Data | None
		loan_date: DF.Date | None
		max_books: DF.Data | None
		reminder_settings: DF.Data | None
	# end: auto-generated types

	_DOCTYPE_NAME = "Library Setting"
