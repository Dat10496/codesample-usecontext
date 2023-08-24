import React, { useState } from "react";

function Header() {
  const [nItems, setNItems] = useState(0);
  return (
    <div className="header">
      <h2>CS Store</h2>
      <h4>Cart ({nItems})</h4>
    </div>
  );
}

export default Header;
