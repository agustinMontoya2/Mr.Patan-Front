export const Footer = () => {
    return <div className="w-screen h-[8%] bg-[#000000] flex flex-row items-center justify-between px-6">
        <div>
            <a href="https://maps.app.goo.gl/3MkYCn4s9xuF9byQA" target="_blank">
                <h2 className="font-carterOne text-2xl">Campichuelo 466 - CABA</h2>
            </a>
        </div>
        <div className="flex flex-row items-center justify-between w-[110px]">
            <a href="tel:49583567" target="_blank">
                <img src="/phone.svg" alt="telefono" className="w-8"/>
            </a>
            <a href="https://wa.me/5491154691450" target="_blank">
                <img src="/whatsapp.svg" alt="whatsapp" className="w-8"/>
            </a>
            <a href="https://www.instagram.com/vetmrpatan/" target="_blank">
                <img src="/instagram.svg" alt="instagram" className="w-8" />
            </a>
        </div>
    </div>;
};