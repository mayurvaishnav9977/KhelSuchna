"use client";
import * as React from "react";
import { Autocomplete, TextField } from "@mui/material";

interface Option {
  value: string;
  label: string;
}

interface SearchableDropdownProps {
  name: string;
  label: string;
  options: Option[];
  value: Option | null;
  onChange: (value: Option | null) => void;
  fullWidth?: boolean;
}

export default function SearchableDropdown({
  name,
  label,
  options,
  value,
  onChange,
  fullWidth = true,
}: SearchableDropdownProps) {
  return (
    <Autocomplete
      id={`${name}-autocomplete`}
      options={options}
      getOptionLabel={(option) => option.label}
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" fullWidth={fullWidth} />
      )}
    />
  );
}
