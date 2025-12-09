import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  
  const handleInput = (event) => {
    const text = event.target.value;
    onSearch(text);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        className="search-bar__input" 
        placeholder="Buscar por nombre o categoría..." 
        onChange={handleInput}
      />
      <span className="search-bar__icon">🔍</span>
    </div>
  );
};

export default SearchBar;