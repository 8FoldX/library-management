# Copyright (c) 2026, NITESH and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Category(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		category: DF.Data
		image: DF.AttachImage | None
	# end: auto-generated types

	_DOCTYPE_NAME = "Category"
