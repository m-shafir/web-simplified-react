import { Card, Button, Badge, ListGroup } from "react-bootstrap";
import { toast } from "react-toastify";

// const cart = [
//   {
//     title: "The Web Developer Bootcamp 2025",
//     instructor: "Colt Steele",
//     rating: 4.7,
//     reviews: 282314,
//     price: "₹3,229",
//     image: "https://img.youtube.com/vi/S7MyHChb8-E/maxresdefault.jpg", // Colt Steele bootcamp review
//   },
//   {
//     title: "Complete web development course",
//     instructor: "Hitesh Choudhary",
//     rating: 4.6,
//     reviews: 13845,
//     price: "₹3,089",
//     image: "https://img.youtube.com/vi/KZ31wDjYleI/maxresdefault.jpg", // Hitesh Choudhary promo
//   },
//   {
//     title: "Angular - The Complete Guide (2025 Edition)",
//     instructor: "Maximilian Schwarzmüller",
//     rating: 4.7,
//     reviews: 217263,
//     price: "₹3,229",
//     image: "https://img.youtube.com/vi/g8OUivf2DM4/maxresdefault.jpg", // Angular course review
//   },
//   {
//     title: "JavaScript - The Complete Guide 2025 (Beginner + Advanced)",
//     instructor: "Academind by Maximilian Schwarzmüller",
//     rating: 4.6,
//     reviews: 32058,
//     price: "₹4,469",
//     image: "https://img.youtube.com/vi/Flfw0V8nZCY/maxresdefault.jpg", // JavaScript course thumbnail
//   },
// ];

export default function Cart({ cart, onRemoveFromCart, setCart }) {
  const totalPrice = cart.reduce((acc, curr) => {
    const data = curr.price.slice(1).replace(",", "");
    console.log(data);
    return (acc += Number(data));
  }, 0);

  function purchase() {
    setTimeout(() => {
      setCart([]);
      toast.success("Purchase Successfull");
    }, 1000);
  }

  console.log(cart);
  // console.log(totalPrice);
  return (
    <main>
      <section className="container">
        <div className="row">
          <h1 className="text-capitalize my-5">Shopping Cart</h1>
          <div className={cart.length > 0 ? "col-md-8" : "col-12"}>
            {cart.length > 0 ? (
              cart.map((course, i) => (
                <CourseCard
                  course={course}
                  onRemoveFromCart={onRemoveFromCart}
                  key={i}
                />
              ))
            ) : (
              <h4 className=" text-center" style={{ margin: "5rem " }}>
                Cart is Empty
              </h4>
            )}
          </div>
          {cart.length > 0 && (
            <div className="col-md-4 d-flex flex-column gap-3 py-5">
              <span className="h4 ">Total : {`₹${totalPrice}`}</span>

              <button
                className="btn btn-primary my-3 my-md-1 py-2"
                onClick={purchase}
              >
                Proceed to Checkout
                <span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function CourseCard({ course, onRemoveFromCart }) {
  return (
    <>
      <div className="shadow-sm border  border-1 my-5 px-4 py-4 d-flex gap-5 rounded rounded-2 ">
        <div>
          <img
            variant="top"
            src={course.image}
            alt="Angular course"
            className="rounded rounded-circle imag"
            style={{ width: "60px", height: "60px" }}
          />
        </div>

        <div>
          <Badge bg="warning" text="dark" className="mb-2">
            Bestseller
          </Badge>
          <Card.Title>{course.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            by {course.instructor}
          </Card.Subtitle>
          <ul className="my-3 p-0">
            <li className="list-unstyled">
              ⭐ {course.rating} - {course.reviews} reviews
            </li>

            <li className="list-unstyled">
              💰 {course.price} <Badge bg="secondary">Premium</Badge>
            </li>
          </ul>
          <div className="d-flex gap-4">
            <Button variant="danger" onClick={() => onRemoveFromCart(course)}>
              Remove
            </Button>
            {/* <Button variant="success">Purchase</Button> */}
          </div>
        </div>
      </div>
    </>
  );
}
