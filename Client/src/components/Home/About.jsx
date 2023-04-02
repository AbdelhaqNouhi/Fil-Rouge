import React from 'react'
import img from '../../assets/images/aboutus.jpg'

const About = () => {
    return (
        <div className="md:my-10 my-16 mx-6 md:mx-16">
            <div class="bg-[#D4C7A0] bg-opacity-20 rounded flex md:justify-between max-md:flex-col gap-12 px-4 py-4">
                <div class="w-1/2 h-full max-md:w-full">
                    <img className='rounded' src={img} alt="" />
                </div>
                <div class="flex flex-col gap-12 items-center w-1/2 py-2 max-md:w-full max-md:gap-6">
                    <div class="flex flex-col gap-4 items-center">
                        <p>À PROPOS</p>
                        <p>MAISON DATTY</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>Maison Datty est une aventure artisanale menée par des passionnés de la
                            confiserie ayant une profonde conviction des bienfaits des dattes.</p>
                        <p>Notre mission est de vous faire profiter des bienfaits et vertus exceptionnelles
                            des dattes qui changeront complètement votre façon de percevoir
                            et consommer ces succulents petits fruits.</p>
                        <p>Chaque recette est pensée pour ravir vos papilles grâce à un délicieux mariage
                            de textures et saveurs, des produits de qualité et un savoir-faire français unique</p>
                        <p>Entre gourmandise, originalité et bienfaits santé, en plus d’être délicieuses, nos
                            Dattys sont un réel petit bijou nutritif.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About