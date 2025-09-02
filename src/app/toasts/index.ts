

import { toast, ToastOptions, Slide } from "react-toastify";

// Розширюємо тип, додаючи кастомні CSS класи
interface CustomToastOptions extends ToastOptions {
  toastClassName?: string;
  bodyClassName?: string;
}

const commonOptions: CustomToastOptions = {
  toastClassName: "custom-toast",
  bodyClassName: "custom-toast-body",
};

export const showSuccess = (message: string = "Успішно!"): void => {
  toast.success(message, commonOptions);
};

export const showError = (message: string = "Сталася помилка!"): void => {
  toast.error(message, commonOptions);
};

export const showInfo = (message: string = "Інформація"): void => {
  toast.info(message, commonOptions);
};

export const showWarning = (message: string = "Увага!"): void => {
  toast.warn(message, commonOptions);
};
