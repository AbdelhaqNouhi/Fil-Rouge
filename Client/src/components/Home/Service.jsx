import React from "react";
import Paiement from "../../assets/images/service/Paiement-sécurisé.svg";
import Service from "../../assets/images/service/Service-Client.svg";
import Livraison from "../../assets/images/service/Livraison-à-domicile.svg";
import Coursier from "../../assets/images/service/Livraison-par-coursier.svg";


function Services() {
    return (
        <div className="md:my-10 mx-6 md:mx-16 flex flex-col gap-10">
            <div className="flex justify-center text-xl font-bold">
                <h1 className="font-medium text-3xl">Our Services</h1>
            </div>
            <div className="flex justify-between max-md:flex-col gap-20">
                <div className="flex flex-col gap-4 items-center">
                    <div>
                        <img src={Paiement} alt="" />
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <h4>Paiement sécurisé</h4>
                        <p>Paypal, Carte Bleue</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <div>
                        <img src={Service} alt="" />
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <h4>Service Client</h4>
                        <p>Lundi au vendredi de 9h00 à 18h00</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <div>
                        <img src={Livraison} alt="" />
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <h4>Livraison à domicile</h4>
                        <p> En France métropolitaine </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <div>
                        <img src={Coursier} alt="" />
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <h4>Livraison par coursier</h4>
                        <p>
                            Uniquement sur Toulouse Et banlieue
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;