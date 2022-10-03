import { useCallback, useState } from "react"
import axios from 'axios';
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "../../components/providers/LoginUserProvider";

export const useAuth = () => {
    const navigate = useNavigate();
    const { showMessage } = useMessage();
    const [loading, setLoading] = useState(false);
    const { setLoginUser } = useLoginUser();
    const login = useCallback((id: string) => {
        setLoading(true);
        axios
            .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                if (res.data) {
                    const isAdmin = res.data.id === 10 ? true : false
                    setLoginUser({ ...res.data, isAdmin })
                    showMessage({ title: "Login suceeded!", status: "success" })
                    navigate("/home")
                } else {
                    // alert("No user found");
                    showMessage({ title: "No user found...", status: "error" })
                    setLoading(false);
                }
            })
            .catch(() => {
                showMessage({ title: "Login failed.", status: "error" })
                setLoading(false);
            })
            .finally(() => { });
    }, [navigate, showMessage, setLoginUser])
    return { login, loading };
}