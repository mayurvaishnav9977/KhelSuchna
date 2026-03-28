"use client";
import React from "react";
import {
  TextField as MuiTextField,
  TextFieldProps,
  useTheme,
} from "@mui/material";

type TextFieldPropsCustom = TextFieldProps & {
  label?: string;
};

export default function TextField({ label, sx, ...props }: TextFieldPropsCustom) {
  const theme = useTheme();

  return (
    <MuiTextField
      label={label}
      margin="normal"
      variant="outlined"
      {...props}
      sx={{
        width: { xs: "100%", sm: "250px", md: "300px" }, // responsive width
        "& .MuiInputBase-root": {
          borderRadius: 2,
          backgroundColor: "rgba(245, 247, 250, 0.8)",
          fontSize: { xs: "0.8rem", sm: "0.9rem" },
        },
        "& .MuiOutlinedInput-input": {
          padding: "8px 10px", // ✅ reduce vertical padding → smaller height
          lineHeight: 1.2,    // ✅ tighter line height
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: theme.palette.grey[300] },
          "&:hover fieldset": { borderColor: theme.palette.primary.main },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.primary.main,
            borderWidth: 2,
          },
        },
        "& .MuiInputLabel-root": {
          fontFamily: "system-ui, sans-serif",
          fontWeight: 500,
          color: theme.palette.grey[800],
          fontSize: { xs: "0.75rem", sm: "0.85rem" },
        },
        ...sx,
      }}
    />
  );
}
