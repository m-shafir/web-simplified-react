import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

export default function NavBar({ courses, wishList, cart, wishListToCart }) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [dataName, setDataName] = useState(null);



  const handleClose = () => setShow(false);

  const handleShow = (passesData, name) => {
    setShow(true);
    setData(passesData);
    setDataName(name);
  };

  // console.log(courses[0]);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        className="bg-primary-subtle text-dark"
      >
        <Container className="py-2">
          <Link to={"/"} className="text-decoration-none">
            <h1
              className="h2 text-dark fw-bold px-md-4"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Web Simplified
            </h1>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Form className="d-flex pt-4 py-md-0">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Enter Course name"
              />
              <Button variant="primary">Search</Button>
            </Form>
            <Nav className="ms-auto d-flex flex-row gap-2 py-2">
              <Button
                className="btn text-danger border-0 fw-semibold "
                style={{ backgroundColor: "#E1AA36" }}
                onClick={() => handleShow(wishList, "Wishlist")}
              >
                <i className="bi bi-heart-fill"></i>{" "}
                <span className="text-light">Wishlist</span>
              </Button>

              <Link to={"/cart"}>
                <Button className="btn btn-success border-0 fw-semibold ">
                  <i className="bi bi-cart2"></i> <span>Cart</span>
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Offcanvas show={show} onMouseLeave={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {wishList.map((course, index) => (
            <div
              key={index}
              className="mb-3 p-3 border rounded shadow-sm bg-light"
              style={{ fontSize: "0.95rem" }}
            >
              <h5 className="fw-semibold">{course.title}</h5>
              <p className="mb-1 text-muted">👨‍🏫 {course.instructor}</p>
              <p className="mb-1">
                ⭐ {course.rating} ({course.reviews.toLocaleString()} reviews)
              </p>
              <p className="text-success fw-bold">{course.price}</p>
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas> */}
      <OffCanvas
        show={show}
        onHandleClose={handleClose}
        visualData={data}
        tagName={dataName}
        wishListToCart={wishListToCart}
      />
    </>
  );
}

function OffCanvas({
  show,
  onHandleClose,
  visualData,
  tagName,
  wishListToCart,
}) {
  return (
    <>
      <Offcanvas
        style={{ maxWidth: "360px" }}
        show={show}
        onClick={onHandleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{tagName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {visualData.map((course, index) => (
            <div
              key={index}
              className="mb-3 p-3 border rounded shadow-sm bg-light"
              style={{ fontSize: "0.95rem" }}
            >
              <h5 className="fw-semibold">{course.title}</h5>
              <p className="mb-1 text-muted">👨‍🏫 {course.instructor}</p>
              <p className="mb-1">
                ⭐ {course.rating} ({course.reviews.toLocaleString()} reviews)
              </p>
              <p className="text-success fw-bold">{course.price}</p>
              <button
                className="btn btn-primary"
                onClick={(e) => wishListToCart(e,course)}
              >
                Add to cart
              </button>
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
