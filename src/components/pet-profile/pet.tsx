import { PetProfile } from "./pet-profile"

export const Pet = () => {
    return (
        <div className='h-[80%] w-[90%] flex flex-col items-center justify-between'>
        <h1 className='text-3xl font-kanit text-black font-bold'>Tu mascota</h1>
        <div className='w-full h-[90%] flex flex-col items-center justify-center'>
        <PetProfile/>
        </div>
        </div>
    )
}