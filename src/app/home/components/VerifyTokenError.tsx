"use client";

import { useEffect } from "react";
import { showWarning } from "@/app/toasts";

export default function VerifyTokenError({ status }: { status: string }) {
  useEffect(() => {
    if (status === "error") {
      showWarning("На сервері технічні шоколадки");
    }
  }, [status]);

  return null;
}
