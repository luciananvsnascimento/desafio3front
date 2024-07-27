import React, { useState } from 'react';
import '../styles/filtershop.css';
import filtercontrol from '../assets/filter_control.png';
import gridview from '../assets/grid_view.png';
import listview from '../assets/list_view.png';

interface FilterShopProps {
  onFilterChange: (category: string) => void;
  onProductsPerPageChange: (count: number) => void;
}

const FilterShop: React.FC<FilterShopProps> = ({ onFilterChange, onProductsPerPageChange }) => {
  const [category, setCategory] = useState<string>('default');
  const [productsPerPage, setProductsPerPage] = useState<number>(12);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    onFilterChange(newCategory);
  };

  const handleProductsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(e.target.value, 10);
    setProductsPerPage(newCount);
    onProductsPerPageChange(newCount);
  };

  return (
    <div className="filter">
      <div className="filter-options">
        <img
          className="ctrl"
          src={filtercontrol}
          alt="Filter"
          onClick={() => setShowPopup(!showPopup)}
        />
        Filter
        <img className="ctrl" src={gridview} alt="Grid View" />
        <img className="ctrl" src={listview} alt="List View" />
        <div className="results-info">
          <span>|</span> Showing 1-{productsPerPage} of 32 results
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <span className='type-filter'>Filter by category</span>
          <select className="category-filter" value={category} onChange={handleCategoryChange}>
            <option value="default">Default</option>
            <option value="Mesas">Mesas</option>
            <option value="Sofás">Sofás</option>
            <option value="Cadeiras">Cadeiras</option>
            <option value="Armarios">Armários</option>
            <option value="Escrivaninhas">Escrivaninhas</option>
          </select>
        </div>
      )}
      <div className="results-page">
        Show
        <input
          className="input-show"
          type="number"
          value={productsPerPage}
          min="1"
          onChange={handleProductsPerPageChange}
        />
        <div className="sort-by">
          Sort by{' '}
          <select className="op-filter" value="default">
            <option value="default">Default</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterShop;
