import { IFiltersComponent } from '@/interfaces/menu';
import {  ChevronUp } from 'lucide-react';
import React from 'react'

export const Filters: React.FC<IFiltersComponent> = ({
    toggleCategory,
    setPriceOrder,
    handleDeleteCategories,
    subCategories,
    filters,
    handleSeeFilters
  }) => {
    return (
      <div className="flex flex-col justify-between w-[65%] min-h-[120px] h-auto bg-whiteTransparent text-black border-black border-2 rounded-2xl p-4 shadow-lg font-kanit">
        
        {/* Ordenar por Precio */}
        <div className=' flex flex-col sm:flex-row items-center justify-between'>
        <div className="flex flex-col items-center w-full sm:w-1/3">
          <label htmlFor="priceOrder" className="mb-2 text-lg font-semibold">
            Ordenar por:
          </label>
          <select
            id="priceOrder"
            onChange={(e) => setPriceOrder(e.target.value as "asc" | "desc" | "")}
            value={filters.priceOrder}
            className="border border-black rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-black transition"
          >
            <option value="">Relevancia</option>
            <option value="asc">Menor precio</option>
            <option value="desc">Mayor precio</option>
          </select>
        </div>
  
        {/* Filtros de Categoría */}
        <div className="flex flex-col items-center w-full sm:w-[60%]">
          <label htmlFor="categoryFilter" className="mb-2 text-lg font-semibold">
            Categoría:
          </label>
          <select onChange={(e) => toggleCategory(e.target.value)}
            className='block sm:hidden px-4 py-2 rounded-lg border border-black text-black'>
              <option value="">Todas</option>
              {
              subCategories.map((category, index) => (
                <option key={index} value={category} className={filters.category.includes(category) ? "bg-blue-600 text-white" : ""}>
                  {category}
                </option>
              ))}
            </select>
          <div className="hidden sm:flex flex-wrap gap-2 justify-center">
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
            <button
              onClick={handleDeleteCategories}
              className="px-4 py-2 rounded-lg bg-red-500 text-white border border-black hover:bg-red-600 transition-all duration-300 active:scale-95"
            >
              Limpiar
            </button>
          </div>
        </div>
        </div>
        <div onClick={() => handleSeeFilters()} className='flex flex-row items-center justify-center gap-2 cursor-pointer'>
        <p className='text-lg underline'>Ocultar filtros</p>
        <ChevronUp size={24}/>
        </div>
      </div>
    );
  };