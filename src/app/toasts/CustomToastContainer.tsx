"use client";

import { ToastContainer, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomSlide = cssTransition({
  enter: "toast-slide-in",
  exit: "toast-slide-out",
  // @ts-ignore
  duration: [500, 1000],
});

export default function CustomToastContainer() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar
      newestOnTop={false}
      limit={3}
      icon={false}
      closeOnClick
      rtl={false}
      style={{
        bottom: "1vw",
        right: 0,
        margin: 0,
        padding: 0,
      }}
      closeButton={false}
      pauseOnFocusLoss
      transition={CustomSlide}
      toastClassName={(context) => {
        switch (context?.type) {
          case "success":
            return "custom-toast toast-success";
          case "error":
            return "custom-toast toast-error";
          case "info":
            return "custom-toast toast-info";
          case "warning":
            return "custom-toast toast-warning";
          default:
            return "custom-toast";
        }
      }}
    />
  );
}
