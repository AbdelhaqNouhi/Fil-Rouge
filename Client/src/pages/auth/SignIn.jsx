import React from "react";
import { Link, NavLink } from "react-router-dom"; 
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/custom/button/CustomButton";
import SuccessAlert from '../../components/custom/alert/SuccessAlert';
import FailedAlert from '../../components/custom/alert/FailedAlert';


const SignIn = () => {

    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailed, setShowFailed] = useState(false);

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSuccess = () => {
        setShowSuccess(true);
    };

    const handleFailed = () => {
        setShowFailed(true);
    };

    useEffect(() => {
        setTimeout(() => {
            setShowSuccess(false);
            setShowFailed(false);
        }, 2000);
    }, [showSuccess, showFailed]);


    const loginUser = async (e) => {
        e.preventDefault();
        const User = { email, password };

        await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(User)
        })
        .then((res) => res.json())
        .then((data) => {
            const token = data.token;
            try {
                if (token) {
                    handleSuccess();
                    localStorage.setItem("token", token);
                    localStorage.setItem("email", data.email);
                    localStorage.setItem("firstName", data.first_name);
                    localStorage.setItem("lastName", data.last_name);
                    setTimeout(() => {
                        navigate("/");
                    }, 1000);
                } else {
                    handleFailed();
                }
            } catch (error) {
                console.log(error);
            }
        });
    };

    return (
        <div>
            {showSuccess && <SuccessAlert message="Success!" />}
            {showFailed && <FailedAlert message="Failed!" />}
            <div className="flex justify-center my-16 p-4">
                <div className="bg-secondary md:w-1/3 w-full bg-opacity-20 flex rounded-2xl shadow-lg items-center p-4">
                    <div className="w-full">
                        <h2 className="font-bold text-2xl text-blue-500">Login</h2>
                        <p className="text-sm mt-4">
                            if you already a member, easily log in !
                        </p>
                        <form onSubmit={ loginUser } className="flex flex-col gap-12">
                            <input
                                className="w-full p-2 mt-8 border-b bg-secondary bg-opacity-0 rounded outline-none"
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="relative">
                                <input
                                    className="w-full p-2 border-b bg-secondary bg-opacity-0 rounded outline-none"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <svg
                                    className="absolute top-10 right-3 translate-y-1/2"
                                    width="16px"
                                    height="16px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                                        stroke="gray"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                                        stroke="gray"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <CustomButton type="submit" text="Login" />
                        </form>
                        <p className="mt-5 text-xs border-b border-gray-400 py-4">
                            Forgot your Password
                        </p>
                        <div className="mt-3 text-xs flex justify-between items-center">
                            <p>If you Don't have an account..</p>
                            <Link to="/SignUp">
                                <button className="hover:scale-105 duration-300 py-2 px-5 bg-white rounded-xl hover:bg-green"> Register 
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignIn;
