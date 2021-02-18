import { useState } from "react";

export const useOrderConfirm = () => {
  const [openOrederConfirm, setOpenOrderConfirm] = useState(false);

  return { openOrederConfirm, setOpenOrderConfirm }
};
