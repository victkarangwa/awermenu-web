import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import "./style.scss";

const { Search } = Input;

// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: "#1890ff",
//     }}
//   />
// );

const SearchInput = ({
  suffix,
  placeholder,
  onSearch,
  onChange,
  searchResults,
  showSuggestions
}) => {
  return (
    <div className="search-section">
      <Search
        placeholder={placeholder}
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="search-input"
      />
      {searchResults.length && showSuggestions ? (
        <div className="suggestion-box">
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result.name}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default SearchInput;
