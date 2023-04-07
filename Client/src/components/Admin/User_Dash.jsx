import React, {useState, useEffect} from 'react'
import NavBar from './NavBarAdmin'

const User_Dash = () => {

    const [box, setBox] = useState([])

    const GetAllUser = () => {
        fetch('http://localhost:8000/api/GetAllUser')
        .then((res) => res.json())
        .then((data) => setBox(data))
    }

    useEffect(() => {
        GetAllUser();
    }, [])

    return (
        <div>
            {/* className='flex justify-center w-full */}
            <NavBar />
            <div className='flex'>
                <div class="flex flex-col mt-6 w-full p-8">
                    <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 ">
                        <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                            <div className='flex justify-between px-8 py-4 bg-white items-center text-center'>
                                <h1 className='font-bold'>Lists U sers</h1>
                            </div>
                            <table class="min-w-full">
                                <thead>
                                    <tr>
                                        <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200">
                                            Full_Name
                                        </th>
                                        <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200">
                                            ID
                                        </th>
                                        <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200">
                                            E-mail
                                        </th>
                                        <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200">
                                            Phone
                                        </th>
                                        <th class="px-6 py-3 bg-gray-100 border-b border-gray-200">
                                            More
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white">
                                {box && box.length > 0 && box.map((boxobj, index) => (
                                    
                                    <tr>
                                        <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-10 h-10 rounded-full object-cover" src={require("../../assets/images/user-image.JPG")} alt="profile pic" />
                                                </div>

                                                <div class="ml-4">
                                                    <div class="text-sm font-medium leading-5 text-gray-900">
                                                    </div>
                                                    <div class="text-sm leading-5 text-gray-500">
                                                        {boxobj.full_name}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                            <div class="text-sm leading-5 text-gray-900">
                                                {boxobj._id}
                                            </div>
                                        </td>

                                        <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                            <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-yellow-100 rounded-full">
                                                {boxobj.email}
                                            </span>
                                        </td>

                                        <td class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap">
                                            {boxobj.phone}
                                        </td>

                                        <td class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap">
                                            <div class="flex justify-around">
                                                <span class="text-yellow-500 flex justify-center">

                                                    <form method="POST">
                                                        <button class="mx-2 px-2 rounded-md" >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                class="h-5 w-5 text-red-700"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                    clip-rule="evenodd"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </form>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User_Dash