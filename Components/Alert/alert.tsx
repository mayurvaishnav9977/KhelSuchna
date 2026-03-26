"use client";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertColor } from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import type { ReactElement } from "react"; // ✅ correct import

function SlideTransition(props: TransitionProps & { children: ReactElement }) {
  return <Slide {...props} direction="down" />;
}

interface SnackbarAlertProps {
  open: boolean;
  message: string;
  severity?: AlertColor; // "success" | "error" | "info" | "warning"
  autoHideDuration?: number;
  onClose: () => void;
}

export default function SnackbarAlert({
  open,
  message,
  severity = "success",
  autoHideDuration = 4000,
  onClose,
}: SnackbarAlertProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }} // 👌 top-center works well on mobile
      slots={{ transition: SlideTransition }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{
          width: "100%",
          maxWidth: { xs: "90%", sm: "400px" }, // responsive width
          mx: "auto", // center horizontally
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
