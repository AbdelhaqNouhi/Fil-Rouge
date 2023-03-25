import React from 'react'
import { useState, useEffect } from 'react'

const UserInfo = () => {
    const [Box, setBox] = useState([])
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('user_id')
    
    const [showMore, setShowMore] = useState(false)
    const [clickhide, setClickHide] = useState(true)

    const clickShow = () => {
        setShowMore(true)
        setClickHide(false)
    }

    const getAccount = async () => {
        await fetch(`http://localhost:3000/Api/GetAccountByUserId/` + id, {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token}
        })
        .then((res) => res.json())
        .then((data) => {
            if (data) {
                console.log(data);
                setBox(data);
            } else {
                console.log(err.message)
            }
        })
    }

    useEffect(() => {
        getAccount()
    }, [])

    return (
        <div class="bg-white p-3 shadow-sm rounded-sm mb-4 flex flex-col gap-8">
            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="#4c8dff" viewBox="0 0 24 24"
                        stroke="#4c8dff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>
                <span class="tracking-wide text-blue-500">About Me!</span>
            </div>
            <div class="text-gray-700">
                {Box.map((item) => (
                    <div class="grid md:grid-cols-2 text-sm gap-12">
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">First Name*</div>
                            <div class="px-4 py-2">{item.Maker.first_name}</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Last Name*</div>
                            <div class="px-4 py-2">{item.Maker.last_name}</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">CIN*</div>
                            <div class="px-4 py-2">{item.Maker.cin}</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Phone N*</div>
                            <div class="px-4 py-2">{item.Maker.phone}</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">E-mail*</div>
                            <div class="px-4 py-2">
                                <a class="text-blue-800" href="mailto:jane@example.com">{item.Maker.email}</a>
                            </div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Birthday*</div>
                            <div class="px-4 py-2">Feb 06, 1998</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Current Address*</div>
                            <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Permanant Address*</div>
                            <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                        </div>
                        <div>
                            {showMore ? (
                                <div className='flex flex-col gap-8'>
                                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                        <span clas="text-green-500">
                                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="#4c8dff" viewBox="0 0 24 24"
                                                stroke="#4c8dff">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </span>
                                        <span class="tracking-wide text-blue-500">About My Account!</span>
                                    </div>
                                    <div className='flex flex-col gap-12'>
                                        <div class="text-sm gap-80 flex justify-between">
                                            <div class="grid grid-cols-2 gap-64">
                                                <div class="px-4 py-2 font-semibold w-96">Created By*</div>
                                                <div class="px-4 py-2 ml-2">{item.Maker.first_name}{item.Maker.last_name}</div>
                                            </div>
                                            <div class="grid grid-cols-2 gap-64">
                                                <div class="px-4 py-2 font-semibold w-96">Created At*</div>
                                                <div class="px-4 py-2">{item.CreatedAt}</div>
                                            </div>
                                        </div>
                                        <div class="text-sm gap-80 flex justify-between">
                                            <div class="grid grid-cols-2 gap-64">
                                                <div class="px-4 py-2 font-semibold w-96">Account Type*</div>
                                                <div class="px-4 py-2 ml-2">{item.Type}</div>
                                            </div>
                                            <div class="grid grid-cols-2 gap-64">
                                                <div class="px-4 py-2 font-semibold w-96">Account Number*</div>
                                                <div class="px-4 py-2">{item.Number}</div>
                                            </div>
                                        </div>
                                        <div class="text-sm gap-80 flex justify-between">
                                            <div class="grid grid-cols-2 gap-64">
                                                <div class="px-4 py-2 font-semibold w-96">Your Agency*</div>
                                                <div class="px-4 py-2 ml-2">{item.Agency}</div>
                                            </div>
                                            <div class="grid grid-cols-2 gap-64">
                                                <div class="px-4 py-2 font-semibold w-96">Balance*</div>
                                                <div class="px-4 py-2">{item.Balance}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>   
                ))}
            </div>
            {!showMore ? (
                <button onClick={clickShow} class="cursor-pointer hover:scale-120 block w-full text-blue-500 text-sm font-semibold rounded-lg hover:bg-blue-500 hover:text-white p-3 my-4">Show
                    Full Information
                </button>
            ) : (
                ''
            )}
        </div>
    )
}

export default UserInfo