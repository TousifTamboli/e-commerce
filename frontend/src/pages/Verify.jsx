import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token || !success || !orderId) {
        toast.error("Missing payment details.");
        return;
      }

      const response = await axios.post(
        `${backendUrl}api/order/verifyStripe`,
        { success, orderId },
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems({});
        navigate("/orders");
        toast.success("Payment verified successfully!");
      } else {
        navigate("/cart");
        toast.error("Payment verification failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "An error occurred during verification.");
    }
  };

  useEffect(() => {
    if (token && success !== null && orderId) {
      verifyPayment();
    }
  }, [token, success, orderId]);

  return <div>Verifying your payment...</div>;
};

export default Verify;
