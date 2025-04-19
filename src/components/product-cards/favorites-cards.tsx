// "use client"
// import { IFavorite, IFavorites, IProduct } from "@/interfaces/products"
// import Cards from "./cards"
// import { useEffect, useState } from "react"
// import Card from "./card"

// export const FavoritesCards = () => {
//     const [favorites, setFavorites] = useState<IProduct[]>([])
//     const handleGetFavorites = () => {
//         const favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites') as string) : []
//         const f = favorites.map((favorite: IFavorite) => favorite.product)

//         setFavorites(f)
//     }
//     useEffect(() => {
//         handleGetFavorites()
//     }, [])
    
//     return (
//         <div className={`w-full h-full py-4 gap-8 overflow-y-auto flex flex-col items-center justify-start bg-profile`}>
//       {/* <div className='absolute top-0 right-0'>
//       <AddedToCart addedRef={AddedRef} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
//       </div> */}
//     <div className='flex flex-row h-[55%] sm:h-[45%] mb-0 mt-36 grid grid-cols-1 ssm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5'>
//     {
//         favorites && 
//     favorites.map(product => 
//     <Card key={product.id} product={product} handleFavorite={handleFavorite} handleAddToCart={handleAddToCart} favorites={favorites} cart={cartContext.cart}/>
//     )
//     }
//     </div>
//     </div>
//     )
// }