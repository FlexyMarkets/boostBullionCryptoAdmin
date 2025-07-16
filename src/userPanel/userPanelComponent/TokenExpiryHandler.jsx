import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNotification } from "../../globalState/notification/notificationSlice"
import { logout, setTokenExpTime } from "../../globalState/auth/authSlice";

function TokenExpiryHandler() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { tokenExpTime } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!tokenExpTime) return;

        const currentTime = Math.floor(Date.now() / 1000);
        const timeLeft = tokenExpTime - currentTime;

        if (timeLeft <= 0) {
            dispatch(setTokenExpTime(null))
            dispatch(logout());
            dispatch(setNotification({
                open: true,
                message: "Session expired. Please log in again.",
                severity: "info",
            }));
            navigate("/", { replace: true });
            return;
        }

        const timeout = setTimeout(() => {
            dispatch(setTokenExpTime(null))
            dispatch(logout());
            dispatch(setNotification({
                open: true,
                message: "Session expired. Please log in again.",
                severity: "info",
            }));
            navigate("/", { replace: true });
        }, timeLeft * 1000);

        return () => clearTimeout(timeout);
    }, [tokenExpTime, dispatch, navigate]);

    return null;
}

export default TokenExpiryHandler;