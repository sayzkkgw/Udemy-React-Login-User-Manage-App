import { FC, memo } from "react"
import { Routes, Route } from 'react-router-dom';
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: FC = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HeaderLayout><Home /></HeaderLayout>} />
            <Route path="/home/setting" element={<HeaderLayout><Setting /></HeaderLayout>} />
            <Route path="/home/management" element={<HeaderLayout><UserManagement /></HeaderLayout>} />
            <Route path="/*" element={<p>404</p>} />
        </Routes>
    )
})