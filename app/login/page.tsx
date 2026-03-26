"use client";
import Navbar from "@/Components/Navbar/Navbar";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import DatePicker from "react-datepicker";
import Button from "@/Components/Button/button";
import SearchableDropdown from "@/Components/Autocomplete/searchbledropdown";
import Alertbox from "@/Components/Alert/alert";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState<{ value: string; label: string } | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<"success" | "error">("success");
  const [message, setMessage] = useState("");

  const handleLogin = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "test@example.com" && password === "1234") {
      setSeverity("success");
      setMessage("Login successful!");
    } else {
      setSeverity("error");
      setMessage("Invalid email or password.");
    }
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-linear-to-r from-indigo-50 via-white to-indigo-100 px-4">
        <Box
          component="form"
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Alertbox open={open} message={message} severity={severity} onClose={handleClose} />

          <h2 className="text-2xl font-bold text-center text-indigo-600">Welcome Back</h2>
          <p className="text-sm text-gray-500 text-center mb-4">Login to continue</p>

          <TextField
            fullWidth
            id="email"
            label="Email Address"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
          />

          <TextField
            fullWidth
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />

          <SearchableDropdown
            name="category"
            label="Category"
            value={category}
            onChange={setCategory}
            options={[
              { value: "sports", label: "Sports" },
              { value: "music", label: "Music" },
              { value: "tech", label: "Tech" },
            ]}
          />

          <DatePicker
            selected={startDate}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-indigo-400"
            onChange={(date: Date | null) => setStartDate(date)}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full py-2 font-semibold rounded-lg shadow-md hover:shadow-lg transition"
          >
            Login
          </Button>

          <div className="flex items-center my-4">
            <hr className="grow border-gray-300" />
            <span className="px-2 text-gray-400 text-sm">OR</span>
            <hr className="grow border-gray-300" />
          </div>

          <Button
            variant="outlined"
            color="secondary"
            className="w-full py-2 font-semibold rounded-lg hover:bg-gray-50 transition"
          >
            Continue with Google
          </Button>

          <p className="text-sm text-center mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-indigo-600 hover:underline font-medium">
              Sign Up
            </Link>
          </p>
        </Box>
      </div>
    </>
  );
}
