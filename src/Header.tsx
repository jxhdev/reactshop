import * as React from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';

import logo from './logo.svg';

const Header: React.FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const [search, setSearch] = React.useState('');
  React.useEffect(() => {
    const searchParams = new URLSearchParams(props.location.search);
    setSearch(searchParams.get('search') || '');
  }, []);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.history.push(`/products?search=${search}`);
    }
  };
  return (
    <header className="header">
      <div className="search-container">
        <input
          type="search"
          placeholder="search"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <img className="header-logo" src={logo} alt="logo" />
      <h1 className="header-title">React Shop</h1>
      <nav>
        <NavLink
          activeClassName="header-link-active"
          to="/products"
          className="header-link"
        >
          Products
        </NavLink>
        <NavLink
          activeClassName="header-link-active"
          to="/admin"
          className="header-link"
        >
          Admin
        </NavLink>
        <NavLink
          activeClassName="header-link-active"
          to="/contact"
          className="header-link"
        >
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
};

export default withRouter(Header);
