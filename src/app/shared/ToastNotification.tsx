import { ToastContainer, ToastOptions, toast } from "react-toastify";

const emitterSettings: ToastOptions = {
  position: "bottom-right",
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

const notify = (text: string) => {
  toast.success(text, emitterSettings);
};

const ToastNotification = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export { ToastNotification, notify };
