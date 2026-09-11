import { superAdminLinks } from "@/data/role/super_admin/superAdminLinks";
import { librarianLinks } from "@/data/role/librarian/librarianLinks";
import { assistantLibrarianLinks } from "@/data/role/assistant_librarian/assistantLibrarianLinks";
import { staffLinks } from "@/data/role/staff/staffLinks";

export function getNavigationForRole(role) {
  switch (role) {
    case "Super Admin":
      return superAdminLinks;

    case "Librarian":
      return librarianLinks;

    case "Assistant Librarian":
      return assistantLibrarianLinks;

    case "Staff":
      return staffLinks;

    default:
      return [];
  }
}