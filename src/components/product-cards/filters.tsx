import { IFiltersComponent } from '@/interfaces/menu';
import {  ChevronDown, ChevronUp } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { Search } from './search';

export const Filters: React.FC<IFiltersComponent> = ({
    toggleCategory,
    filterFavorites,
    setFilterFavorites,
    setPriceOrder,
    searchTerm,
    setSearchTerm,
    subCategories,
    filters,
    handleSeeFilters
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    return (
      <div className="flex flex-col justify-between items-center w-[80%] min-h-[120px] h-auto bg-whiteTransparent text-black border-black border-2 rounded-2xl py-4 shadow-lg font-kanit">
        
        {/* Ordenar por Precio */}
        <div className=' flex flex-col gap-2 mlg:flex-row items-center justify-around w-[97%]'>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          {/* Hacer similar al checkbox */}
        <div className="flex flex-row items-center justify-center w-full sm:w-[300px] min-w-[260px] gap-3">
          <label htmlFor="priceOrder" className="mb-2 text-lg font-semibold">
            Ordenar por:
          </label>
          <select
            id="priceOrder"
            onChange={(e) => setPriceOrder(e.target.value as "asc" | "desc" | "")}
            value={filters.priceOrder}
            className="w-[125px] border border-black rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-black transition"
          >
            <option value="">Relevancia</option>
            <option value="asc">Menor precio</option>
            <option value="desc">Mayor precio</option>
          </select>
        </div>
  
        {/* Filtros de Categoría */}
        <div className="flex flex-row items-center justify-center w-full sm:w-[300px] gap-3">
          <label htmlFor="categoryFilter" className="mb-2 text-lg font-semibold">
            Categoría:
          </label>
          <div ref={menuRef} className="relative flex flex-col items-center">
          <div
  onClick={() => setIsOpen(!isOpen)}
  className={` bg-white w-[142px] px-4 py-2 pr-1 rounded-md border border-black text-black cursor-pointer flex items-center justify-between
  ${isOpen ? "border-2 border-black" : ""}`}
>
  {filters.category.length ? filters.category.join(", ") : "Todas"}
  <ChevronDown size={16} className="ml-auto" />
</div>
    {isOpen && (
      <div className="absolute z-50 mt-12 w-[142px] bg-white border border-black rounded-lg shadow-lg max-h-40 overflow-auto">
        <div className="px-4 py-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={!filters.category.length}
              onChange={() => toggleCategory("")}
            />
            <span>Todas</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
              <input
                type="checkbox"
                checked={filterFavorites}
                onChange={() => setFilterFavorites(!filterFavorites)}
              />
              <span>Favoritos</span>
            </label>
          {subCategories.map((category, index) => (
            <label key={index} className="flex items-center space-x-2 mt-2">
              <input
                type="checkbox"
                checked={filters.category.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>
    )}
  </div>
          {/* <div className="flex flex-wrap gap-2 justify-center">
            {subCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => toggleCategory(category)}
                className={`px-4 py-2 rounded-lg border border-black text-black transition-all duration-300 ${
                  filters.category.includes(category)
                    ? "bg-gray-400 active:scale-95"
                    : "bg-white hover:bg-gray-200 active:scale-95"
                }`}
              >
                {category}
              </button>
            ))}
            <button onClick={() => setFilterFavorites(!filterFavorites)} className={`px-4 py-2 rounded-lg border border-black text-black transition-all duration-300 ${filterFavorites ? "bg-gray-400 active:scale-95" : "bg-white hover:bg-gray-200 active:scale-95"}`}>favoritos</button>
            <button
              onClick={handleDeleteCategories}
              className="px-4 py-2 rounded-lg bg-red-500 text-white border border-black hover:bg-red-600 transition-all duration-300 active:scale-95"
            >
              Limpiar
            </button>
          </div> */}
        </div>
        </div>
        <div onClick={() => handleSeeFilters()} className='w-[150px] flex flex-row items-center justify-center gap-2 cursor-pointer'>
        <p className='text-lg underline'>Ocultar filtros</p>
        <ChevronUp size={24}/>
        </div>
      </div>
    );
  };