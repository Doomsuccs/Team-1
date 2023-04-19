import React, { useState } from "react";
import "./Navbar.css";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";

function NavBar() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>E F F O R T L E S S</Navbar.Brand>
                <Nav>
                    <NavDropdown title="Shop Men" className="gender-dropdown">
                        <p className="product-dropdown">Products</p>
                        <NavDropdown.Item href="https://www.youngla.com/collections/t-shirts">
                            Tops
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://www.youngla.com/collections/shorts">
                            Shorts
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://www.youngla.com/collections/jeans">
                            Pants
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://www.youngla.com/collections/lifting-gear">
                            Accessories
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://www.youngla.com/collections/outerwear">
                            Outerwear
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Shop Women">
                        <p className="product-dropdown">Products</p>
                        <NavDropdown.Item href="https://shop.lululemon.com/c/women-maintops/_/N-815">
                            Tops
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://shop.lululemon.com/c/womens-leggings/_/N-8s6">
                            Leggings
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://shop.lululemon.com/c/women-pants/_/N-7w0">
                            Pants
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://shop.lululemon.com/c/equipment/_/N-8tl">
                            Accessories
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://shop.lululemon.com/c/womens-outerwear/_/N-8s4">
                            Outerwear
                        </NavDropdown.Item>
                    </NavDropdown>
                    <button onClick={() => setCount(1 + count)}>
                        Add to Cart
                    </button>
                    <button
                        onClick={() => setCount(count - 1)}
                        disabled={count <= 0}
                    >
                        Remove From Cart
                    </button>
                </Nav>
                <button className="cart-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        {" "}
                        <path
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                            fill="white"
                        ></path>{" "}
                    </svg>
                </button>
                <p className="cart-quantity">{count}</p>
            </Navbar>
        </div>
    );
}
export default NavBar;
