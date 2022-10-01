import { useCallback, useState } from "react"
import axios from 'axios';
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";

export const useAuth = () => {
    const navigate = useNavigate();
    const { showMessage } = useMessage();
    const [loading, setLoading] = useState(false);
    const login = useCallback((id: string) => {
        setLoading(true);
        axios
            .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                if (res.data) {
                    showMessage({ title: "Login suceeded!", status: "success" })
                    navigate("/home")
                } else {
                    // alert("No user found");
                    showMessage({ title: "No user found...", status: "error" })
                }
            })
            .catch(() => {
                showMessage({ title: "Login failed.", status: "error" })
            })
            .finally(() => setLoading(false));
    }, [navigate, showMessage])
    return { login, loading };
}