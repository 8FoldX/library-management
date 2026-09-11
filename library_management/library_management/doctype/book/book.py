# Copyright (c) 2026, NITESH and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Book(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		author: DF.Link
		book_title: DF.Data
		category: DF.Link | None
		cover_image: DF.AttachImage | None
		edition: DF.Literal["1st Edition", "2nd Edition", "3rd Edition", "4th Edition", "5th Edition", "6th Edition", "7th Edition", "8th Edition", "9th Edition", "10th Edition", "Revised Edition", "New Edition", "Special Edition", "International Edition", "Student Edition", "Teacher Edition"]
		isbn: DF.Data | None
		publisher: DF.Link
	# end: auto-generated types

	_DOCTYPE_NAME = "Book"
