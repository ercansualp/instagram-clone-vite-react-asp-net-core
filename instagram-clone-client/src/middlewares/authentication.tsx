import axios from "axios";
import {jwtDecode} from "jwt-decode";
import {setCurrentUser} from "~/store/authentication/actions.tsx";
import {useEffect, useState} from "react";
import Loading from "~/routes/Loading.tsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface props {
    children: any;
}

export default function Authentication(props: props) {
    const [loading, setLoading] = useState<boolean>(true);
    const { children } = props;
    const accessToken = localStorage.getItem("accessToken");

    useEffect(() => {
        CheckAuthentication();
    });

    useEffect(() => {
        const handleLocalStorageChange = () => {
            CheckAuthentication();
        };
        window.addEventListener('storage', handleLocalStorageChange);

        return () => {
            window.removeEventListener('storage', handleLocalStorageChange);
        };
    });

    const CheckAuthentication = async () => {
        if (accessToken) {
            try {
                jwtDecode(accessToken);
                await axios.post("https://localhost:7241/api/auth/CheckAuthorization",{}, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }).then((response) => {
                    setCurrentUser(response.data);
                    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
                })
                    .catch((error) => {
                        localStorage.removeItem("accessToken");
                        setCurrentUser(undefined);
                        delete axios.defaults.headers.common["Authorization"];
                    })
            } catch {
                localStorage.removeItem("accessToken");
                setCurrentUser(undefined);
                delete axios.defaults.headers.common["Authorization"];
            }
        }
        else
        {
            setCurrentUser(undefined);
            delete axios.defaults.headers.common["Authorization"];
        }
        setLoading(false);
    }

    if(loading)
        return <Loading />
    return (
        <>
            {children}
            <ToastContainer />
        </>
    )
}
