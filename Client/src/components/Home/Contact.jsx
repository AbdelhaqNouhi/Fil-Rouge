import React from 'react'


const Contact = () => {
    return (
        <div className=' md:my-10 my-16 mx-6 md:mx-16'>
            <div className='bg-[#D4C7A0] bg-opacity-20 rounded p-8 flex justify-between max-md:flex-col gap-10'>
                <div className='flex flex-col gap-16 max-md:gap-8'>
                    <h2 className='text-[#D4C7A0] font-medium text-2xl'>Contact Us</h2>
                    <div className='flex flex-col gap-10'>
                        <div className='w-full flex gap-4 py-1 rounded items-center'>
                            <svg width="16" height="16" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.059705 2.7587C1.05339 4.80302 3.14525 7.125 6.0922 9.23337C9.03914 11.3418 12.2846 12.8384 15.142 13.5493C15.5301 13.6454 15.9587 13.5768 16.2508 13.3693L18.2275 11.9551L18.6881 11.6255C19.104 11.328 19.104 10.8444 18.6881 10.5469L15.6282 8.3592C15.2124 8.0617 14.5364 8.0617 14.1206 8.3592L13.2911 8.95266C12.8604 9.26083 12.1738 9.29135 11.6918 9.02284C10.7387 8.49193 9.79402 7.89543 8.87923 7.24093C7.96444 6.58644 7.13068 5.91059 6.38862 5.22865C6.0133 4.88386 6.05595 4.39414 6.48671 4.08444L7.3162 3.49098C7.73201 3.19348 7.73201 2.70986 7.3162 2.41237L4.25624 0.22312C3.84043 -0.0743735 3.16447 -0.0743735 2.74865 0.22312L2.28806 0.552652L0.311347 1.96689C0.0213222 2.17439 -0.0746347 2.48104 0.059705 2.7587Z" fill="black" />
                            </svg>
                            <p>+33 5 32 59 26 62</p>
                        </div>
                        <div className='w-full flex gap-4 py-1 rounded items-center'>
                            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.1068 6.46009C9.95331 6.55131 9.77224 6.59688 9.59123 6.59688C9.4101 6.59688 9.22909 6.55131 9.07557 6.46009L1.74385 2.10181L5.81283e-05 1.06523L0 11.0732C5.81283e-05 11.4636 0.39039 11.78 0.871925 11.78L18.3105 11.78C18.7921 11.78 19.1824 11.4635 19.1824 11.0732V1.06519L17.4385 2.10181L10.1068 6.46009Z" fill="black" />
                                <path d="M9.59082 5.01343L18.0244 4.70928e-05L1.15698 0L9.59082 5.01343Z" fill="black" />
                            </svg>
                            <p>contact.datty@gmail.com</p>
                        </div>
                        <div className='w-full flex gap-4 py-1 rounded items-center'>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.50001 17.4166C13.8723 17.4166 17.4167 13.8722 17.4167 9.49992C17.4167 5.12766 13.8723 1.58325 9.50001 1.58325C5.12776 1.58325 1.58334 5.12766 1.58334 9.49992C1.58334 13.8722 5.12776 17.4166 9.50001 17.4166Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.5 3.95825V9.49992L12.6667 12.6666" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p>Monday - Saturday: 09:00 am - 18:00 pm</p>
                        </div>
                    </div>
                    <div class="flex gap-16">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.2236 0.00756836H4.7613C2.13957 0.00756836 0 2.14714 0 4.76887V14.2463C0 16.8529 2.13957 18.9925 4.7613 18.9925H14.2387C16.8604 18.9925 19 16.8529 19 14.2312V4.76887C18.9849 2.14714 16.8454 0.00756836 14.2236 0.00756836ZM14.2086 7.11938C14.2086 7.22485 14.2086 7.33032 14.2086 7.4358C14.2086 10.6 11.7676 14.2463 7.29263 14.2463C5.92149 14.2463 4.64076 13.8545 3.57098 13.1765C3.76685 13.1915 3.94766 13.2066 4.14354 13.2066C5.28866 13.2066 6.32831 12.8299 7.15702 12.182C6.08723 12.167 5.19826 11.4739 4.88184 10.5246C5.03251 10.5547 5.18319 10.5698 5.33386 10.5698C5.55987 10.5698 5.78588 10.5397 5.98176 10.4794C4.89691 10.2534 4.0682 9.28909 4.0682 8.1289V8.09876C4.36955 8.27957 4.7613 8.38504 5.15305 8.40011C4.50516 7.97822 4.0682 7.23992 4.0682 6.41121C4.0682 5.97426 4.18874 5.56744 4.39968 5.20582C5.60508 6.65229 7.38303 7.60154 9.40206 7.70701C9.35686 7.5262 9.34179 7.34539 9.34179 7.16458C9.34179 5.83865 10.4266 4.76887 11.7676 4.76887C12.4607 4.76887 13.0936 5.05515 13.5456 5.52224C14.1031 5.41677 14.6154 5.22089 15.0825 4.93461C14.9017 5.4921 14.5099 5.95919 14.0127 6.26054C14.5099 6.20027 14.977 6.07973 15.414 5.88385C15.0825 6.36601 14.6757 6.7879 14.2086 7.11938Z" fill="black" />
                        </svg>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.2349 0H4.75C2.14127 0 0 2.14127 0 4.76508V14.25C0 16.8587 2.14127 19 4.75 19H14.2349C16.8587 19 19 16.8587 19 14.2349V4.76508C19 2.14127 16.8587 0 14.2349 0ZM12.0484 9.5H10.254V15.381H7.99206V9.5H6.78571V7.0873H7.84127V6.0619C7.84127 5.09683 8.32381 3.57381 10.3595 3.57381H12.2143V5.57937H10.9024C10.6913 5.57937 10.4048 5.71508 10.4048 6.18254V7.0873H12.2595L12.0484 9.5Z" fill="black" />
                        </svg>
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.49745 5.73771C7.75305 5.73771 6.32949 7.02769 6.32949 8.6084C6.32949 10.1891 7.75305 11.4791 9.49745 11.4791C11.2418 11.4791 12.6654 10.1891 12.6654 8.6084C12.6654 7.02769 11.2418 5.73771 9.49745 5.73771ZM18.9989 8.6084C18.9989 7.41964 19.0108 6.24164 18.9371 5.05503C18.8635 3.67676 18.5165 2.45354 17.4043 1.44568C16.2897 0.435658 14.9421 0.123393 13.4211 0.056633C12.1093 -0.0101272 10.8093 0.000640562 9.49982 0.000640562C8.18796 0.000640562 6.88798 -0.0101272 5.5785 0.056633C4.0575 0.123393 2.70761 0.437812 1.59538 1.44568C0.480772 2.45569 0.136171 3.67676 0.0624975 5.05503C-0.0111759 6.2438 0.000706894 7.42179 0.000706894 8.6084C0.000706894 9.79501 -0.0111759 10.9752 0.0624975 12.1618C0.136171 13.54 0.483149 14.7633 1.59538 15.7711C2.70999 16.7811 4.0575 17.0934 5.5785 17.1602C6.89036 17.2269 8.19034 17.2162 9.49982 17.2162C10.8117 17.2162 12.1117 17.2269 13.4211 17.1602C14.9421 17.0934 16.292 16.779 17.4043 15.7711C18.5189 14.7611 18.8635 13.54 18.9371 12.1618C19.0132 10.9752 18.9989 9.79716 18.9989 8.6084V8.6084ZM9.49745 13.0253C6.80005 13.0253 4.62312 11.0527 4.62312 8.6084C4.62312 6.16411 6.80005 4.19146 9.49745 4.19146C12.1948 4.19146 14.3718 6.16411 14.3718 8.6084C14.3718 11.0527 12.1948 13.0253 9.49745 13.0253ZM14.5714 5.04211C13.9416 5.04211 13.433 4.58125 13.433 4.01056C13.433 3.43987 13.9416 2.97901 14.5714 2.97901C15.2012 2.97901 15.7098 3.43987 15.7098 4.01056C15.71 4.14607 15.6806 4.28029 15.6235 4.40552C15.5664 4.53075 15.4825 4.64453 15.3768 4.74036C15.271 4.83618 15.1455 4.91216 15.0073 4.96394C14.8691 5.01572 14.721 5.04228 14.5714 5.04211V5.04211Z" fill="black" />
                        </svg>
                    </div>
                </div>

                <div class="flex flex-col gap-8 w-1/2 max-md:w-full">
                    <h5 className='text-[#D4C7A0] font-medium'>If Any question or remarks? Just  fill up the form..!</h5>
                    <div class="flex flex-col gap-8 max-md:gap-4">
                        <div class="flex gap-8 max-md:gap-4 w-full max-md:flex-col">
                            <input className='p-2 w-full rounded' type="text" name="nom" placeholder="Nom" />
                            <input className='p-2 w-full rounded' type="text" name="prenome" placeholder="Prenome" />
                        </div>
                        <div class="flex gap-8 max-md:gap-4 w-full max-md:flex-col">
                            <input className='p-2 w-full rounded' type="email" name="email" placeholder="E-mail" />
                            <input className='p-2 w-full rounded' type="tel" name="phone" placeholder="Phone" />
                        </div>
                    </div>
                    <div className=''>
                        <textarea className='w-full p-2 max-h-24 rounded' name="message" placeholder="Message"></textarea>
                    </div>
                    <button className='bg-[#4E4A42] text-white py-2 rounded-md'>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact