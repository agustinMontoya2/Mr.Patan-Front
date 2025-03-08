import { ISearchBar } from '@/interfaces/menu'
import { SearchIcon } from 'lucide-react'
import React from 'react'

export const Search: React.FC<ISearchBar> = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="bg-whiteTransparent text-[rgb(0, 0, 0)] w-[65%] flex items-center flex-row justify-around border-solid border-[rgb(0,0,0)] border-2 rounded-2xl text-lg font-kanit">
                                    <SearchIcon
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Buscar"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="bg-transparent text-center border-none rounded-lg outline-none px-2 py-2 text-black placeholder:text-black w-full"
                                    />
                                </div>
  )
}
