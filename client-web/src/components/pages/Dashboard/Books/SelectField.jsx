"use client";

import React, { useEffect, useState } from "react";
import frappe from "@/lib/api";

const SelectField = ({
  apiPath,
  value,
  onChange,
  label = "Select",
  placeholder,
  valueKey = "name",
  labelKey = "name",
}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        const response = await frappe.get(apiPath);

        const data = response.data?.message || [];

        setItems(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(`Failed to load ${label}:`, error);

        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    if (apiPath) {
      getData();
    }
  }, [apiPath]);

  return (
    <select
      value={value || ""}
      onChange={onChange}
      disabled={loading}
      className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-black disabled:bg-gray-100"
    >
      <option value="">
        {loading
          ? `Loading ${label}...`
          : placeholder || `Select ${label}`}
      </option>

      {!loading &&
        items.map((item, index) => (
          <option
            key={item.name || index}
            value={item[valueKey] || ""}
          >
            {item[labelKey] || "Unnamed"}
          </option>
        ))}
    </select>
  );
};

export default SelectField;