import '../styles/filtershop.css';
import filtercontrol from '../assets/filter_control.png';
import gridview from '../assets/grid_view.png';
import listview from '../assets/list_view.png';

const FilterShop = () => {
  return (
    <div className="filter">
      <div className="filter-options">
        <img className="ctrl" src={filtercontrol} alt="Filter" />
        Filter
        <img className="ctrl" src={gridview} alt="Grid View" />
        <img className="ctrl" src={listview} alt="List View" />
        <div className="results-info">
          <span>|</span> Showing 1-16 of 32 results
        </div>
      </div>
      <div className="results-page">
        Show
        <input
          className="input-show"
          type="number"
          value={16}
          min="1"
        />
        <div className="sort-by">
          Sort by{' '}
          <select className="op-filter">
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
