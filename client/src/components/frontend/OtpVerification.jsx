import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
import { CgPassword } from "react-icons/cg";
import logo from "../../assets/logo2.png";

export default function OtpVerification({ email, hashedOtp }) {
    const [otp, setOtp] = useState("");
    const [hashOtp, setHashOtp] = useState(hashedOtp);
    const [loading, setLoading] = useState(false);
    const [resendOtpStatus, setResendOtp] = useState(false);

    const handleOtpFormData = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/email-verification`, {
                email,
                hashedOtp,
                otp,
                headers: { "Content-type": "application/json" },
            });

            let data = response.data;
            if (data.status) {
                toast.success(data.message);
                setOtp("");
                window.location.href = "/supplier/dashboard";
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }

        setLoading(false);
    };

    const resendOtp = async () => {
        setResendOtp(true);
        try {
            const response = await axios.post("/api/supplier/resend-otp", {
                email,
                headers: { "Content-type": "application/json" },
            });

            let data = response.data;
            if (data.status) {
                setHashOtp(data.data);
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
        setResendOtp(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center mb-3">
                <a href="/">
                    <img src={logo} height={40} alt="Expertsofdeals" />
                </a>
            </div>
            <div className="text-center mb-5">
                <h4 className="text-xl font-semibold text-cblue mb-2">Verify Your Email</h4>
            </div>
            <div className="mb-5">
                <div className="flex items-center border rounded-sm px-3 py-2">
                    <CgPassword className="text-gray-500" />
                    <input
                        type="text"
                        className="ml-2 w-full outline-none"
                        placeholder="Enter OTP"
                        name="otp"
                        value={otp}
                        onChange={handleOtpFormData}
                    />
                </div>
            </div>
            <div className="mb-5">
                <button
                    type="submit"
                    className="w-full bg-cblue text-white py-2 rounded-sm"
                    disabled={loading}
                >
                    {loading ? "Verifying..." : "Verify"}
                </button>
            </div>
            <div>
                <p className="text-center text-xs">
                    {!resendOtpStatus ? (
                        <button
                            type="button"
                            onClick={resendOtp}
                            className="text-cblue hover:underline"
                        >
                            Resend Otp
                        </button>
                    ) : (
                        "Resending..."
                    )}
                </p>
            </div>
        </form>
    );
}
