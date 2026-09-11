# Copyright (c) 2026, NITESH and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Fine(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		fine_amount: DF.Currency
		fine_date: DF.Date | None
		member: DF.Link
		payment_date: DF.Date | None
		payment_status: DF.Literal["Unpaid", "Paid", "Waived"]
		remarks: DF.SmallText | None
		resons: DF.Literal["Late Return", "Lost Book", "Damaged Book", "Other"]
	# end: auto-generated types

	_DOCTYPE_NAME = "Fine"
