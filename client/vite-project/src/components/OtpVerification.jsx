import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const OtpVerification = ({ email, backendURL, onSuccess }) => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60); // 60 seconds timer
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    // Start countdown timer
    if (timer > 0) {
      const timeoutId = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(timeoutId);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const verifyOtp = async () => {
    try {
      const { data } = await axios.post(`${backendURL}/api/user/verify-otp`, { email, otp });
      if (data.success) {
        toast.success("OTP verified successfully!");
        onSuccess(); // Proceed after OTP success
      } else {
        toast.error(data.message || "Invalid OTP");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const resendOtp = async () => {
    try {
      await axios.post(`${backendURL}/api/user/resend-otp`, { email });
      toast.info("OTP resent. Please check your email.");
      setTimer(60);
      setCanResend(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="otp-container">
      <h2>Enter OTP sent to {email}</h2>
      <input
        type="text"
        maxLength={6}
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={verifyOtp} disabled={otp.length !== 6}>
        Verify OTP
      </button>
      <div>
        {canResend ? (
          <button onClick={resendOtp}>Resend OTP</button>
        ) : (
          <p>Resend available in {timer}s</p>
        )}
      </div>
    </div>
  );
};

export default OtpVerification;
