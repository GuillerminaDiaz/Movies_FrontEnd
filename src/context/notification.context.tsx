import React, { useState } from "react";
import { Notification } from "../components";
import { AlertColor } from "@mui/material";

type ContextProps = {
  getError: (msg: string) => void;
  getSuccess: (msg: string) => void;
};
const NotificationContext = React.createContext<ContextProps | null>(null);

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [message, setMessaje] = useState("");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined);

  const handleClose = () => {
    setOpen(false);
  };
  const getError = (msg: string) => {
    setSeverity("error");
    setOpen(true);
    setMessaje(msg);
  };
  const getSuccess = (msg: string) => {
    setSeverity("success");
    setOpen(true);
    setMessaje(msg);
  };
  const value = {
    getError,
    getSuccess,
  };
  return (
    <NotificationContext.Provider value={value}>
      <Notification
        handleClose={handleClose}
        open={open}
        severity={severity}
        message={message}
      />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = React.useContext(NotificationContext);
  if (!context) throw new Error("No context");
  return context;
};
