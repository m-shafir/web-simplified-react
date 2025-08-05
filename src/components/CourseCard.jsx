import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

export default function CourseCard({
  course,
  onAddtoWishlist,
  onAddtoCart,
  wishList,
  cart,
}) {
  return (
    <>
      {/* <HeaderName name={"heading"} /> */}
      <Cards
        course={course}
        onAddtoWishlist={onAddtoWishlist}
        onAddtoCart={onAddtoCart}
        wishList={wishList}
        cart={cart}
      />
    </>
  );
}

function Cards({ course, onAddtoWishlist, onAddtoCart }) {
  return (
    <>
      <Card
        style={{ maxWidth: "16rem" }}
        className="shadow-sm border-2 mb-2 p-0"
      >
        <Card.Img
          variant="top"
          src={course?.image}
          alt="React Logo"
          style={{ height: "150px", objectFit: "cover", padding: ".5rem" }}
        />
        <Card.Body>
          <Card.Title className="fw-semibold h6">{course?.title}</Card.Title>
          <Card.Text className="text-muted mb-2">
            {course?.instructor}
          </Card.Text>
          <Card.Text>
            ⭐ {course?.rating}{" "}
            <span className="text-muted fw-medium">{`- ${course?.reviews}`}</span>
          </Card.Text>
          <Card.Text className="fw-bold">{course?.price}</Card.Text>
        </Card.Body>
        <Stack
          direction="horizontal"
          gap={2}
          className="d-flex justify-content-center gap-4"
        >
          <Badge
            onClick={() => onAddtoWishlist(course)}
            bg="info"
            className="my-2 py-2"
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-heart-fill"></i>
          </Badge>
          <Badge
            onClick={() => onAddtoCart(course)}
            bg="success"
            className="my-2 py-2"
            style={{ cursor: "pointer" }}
          >
            Add to Cart
          </Badge>
        </Stack>
      </Card>
    </>
  );
}
