"use client";
import React, { useState } from "react";
import TextField from "@/Components/Input/inputbox"; 
import CustomModal from "@/Components/Model/Model"; 
import Tooltip from "@/Components/Tooltip/Tooltip";
import Button from "@/Components/Button/button";

export default function TestPage() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setOpen(false);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Testing CustomModal in Next.js</h1>

      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <CustomModal open={open} onClose={() => setOpen(false)} title="Test Form">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </CustomModal>

      <div>
        <Tooltip content="This is a tooltip" position="bottom">
          <Button type="submit" variant="outlined" color="primary">
            Hover me
          </Button>
        </Tooltip>

        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
