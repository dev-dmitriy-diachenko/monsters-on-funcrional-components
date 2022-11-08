import { ChangeEventHandler } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
  className: string;
  placeholder: string;
  onSearchChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  placeholder,
  className,
  onSearchChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onSearchChangeHandler}
  />
);

export default SearchBox;
