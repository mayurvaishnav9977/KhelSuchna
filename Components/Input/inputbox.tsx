"use client";
import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

type InputBoxProps = TextFieldProps & {
  label: string;
};

export default function InputBox({ label, ...props }: InputBoxProps) {
  return (
    <TextField
      label={label}
      fullWidth
      margin="normal"
      {...props}
      sx={{
        '& .MuiInputBase-root': {
          borderRadius: 2,
       
           backgroundColor: 'rgba(245, 247, 250, 0.8)', // subtle background
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#d1d5db', // light gray border
          },
          '&:hover fieldset': {
            borderColor: '#2563eb', // blue on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: '#2563eb', // blue when focused
            borderWidth: 2,
          },
        },
        '& .MuiInputLabel-root': {
          fontWeight: 500,
          color: '#374151',
        },
      }}
    />
  );
}
