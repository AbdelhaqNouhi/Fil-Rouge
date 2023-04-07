import { useState } from 'react'
import { useNavigate } from "react-router-dom"

const LoginAdmin = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState(false)

    const LoginAdmin =  async (e) => {
        e.preventDefault();
        const admin = { email, password }

        await fetch('http://localhost:8000/api//LoginAdmin', {
            method: 'POST',
            body: JSON.stringify(admin),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((res) => res.json ())
        .then((data) => {
            const admin_id = data._id
            if (admin_id) {
                console.log(admin_id);
                localStorage.setItem('admin_id', JSON.stringify(admin_id))
                navigate('/Admin');
            }
            else {
                console.log('eeeeeee');
            }
        })
    }

    return (
        <div className="flex justify-center my-24">
            <form onSubmit={LoginAdmin} className="w-4/5 lg:w-2/6 md:w-5/4 sm:w-2/4 flex flex-col gap-6 bg-gradient-to-r from-slate-900 to-slate-600 p-8 text-white font-medium rounded-lg">
                <h1 className="font-bold text-xl">Login Admin</h1>

                <div className="flex flex-col gap-3 text-white">
                    <label>E-mail</label>
                    <input type="email" placeholder="E-mail" className=" px-2 py-2 rounded text-black" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col gap-3 text-white">
                    <label>Password</label>
                    <input type="password" placeholder="Password" className=" px-2 py-2 rounded text-black" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button className="bg-sky-700 hover:bg-sky-600 p-2 rounded-md">Login</button>
            </form>
        </div>
    )
}

export default LoginAdmin