import React from "react";
import { Container } from "react-bootstrap";
import CourseCard from "../components/CourseCard";
import CourseCarousel from "../components/CourseCarousel";

export default function Home({
  courses,
  onAddtoWishlist,
  onAddtoCart,
  cart,
  wishList,
}) {
  return (
    <>
      <Container className="pt-5" style={{ marginBottom: "5rem" }}>
        <h1>
          Welcome Back , <span style={{ color: "#4A9782" }}>Shafir</span>
        </h1>
        <h6 className="mt-3" style={{ color: "#4A9782" }}>
          Full Stack Web Developer
        </h6>
      </Container>
      <Container className="container-fluid">
        <CourseCarousel />
      </Container>
      <Container>
        <h1 className="mb-3 mt-5 text-center">What to learn next</h1>
      </Container>
      <Container
        className="container d-flex flex-wrap gap-3 justify-content-center mt-5 "
        style={{ marginBottom: "10rem" }}
      >
        {courses[0]?.mainCourses?.map((course, i) => (
          <CourseCard
            course={course}
            key={i}
            onAddtoWishlist={onAddtoWishlist}
            onAddtoCart={onAddtoCart}
            wishList={wishList}
            cart={cart}
          />
        ))}
      </Container>
      <Container className="mt-5">
        <HeaderName name={"Recommended for you"} />
      </Container>
      <Container
        className="container d-flex flex-wrap gap-3 justify-content-center mt-5"
        style={{ marginBottom: "10rem" }}
      >
        {courses[0]?.recommendedForYou?.map((course, i) => (
          <CourseCard
            course={course}
            key={i}
            onAddtoWishlist={onAddtoWishlist}
            onAddtoCart={onAddtoCart}
            wishList={wishList}
            cart={cart}
          />
        ))}
      </Container>
      {/*
       */}

      <Container className="mt-5">
        <HeaderName name={"Based on your recent searches"} />
      </Container>
      <Container className="container d-flex flex-wrap gap-3 justify-content-center mt-5">
        {courses[0]?.basedOnRecentSearches?.map((course, i) => (
          <CourseCard
            course={course}
            key={i}
            onAddtoWishlist={onAddtoWishlist}
            onAddtoCart={onAddtoCart}
            wishList={wishList}
            cart={cart}
          />
        ))}
      </Container>

      {/* top course */}
      <Container className="mb-5">
        <div className="container mt-5 p-4 bg-light border rounded shadow">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img
                src="https://img-c.udemycdn.com/course/480x270/4993934_0107_4.jpg"
                className="img-fluid mb-3"
                alt="Web stack logos"
              />
            </div>
            <div className="col-md-6">
              <h3 className="text-primary fw-bold">🚀 Crash Course</h3>
              <h5 className="mb-3">Build a Full-Stack Web App in a Weekend!</h5>
              <p className="text-muted">
                Quick, fun, and hands-on web development journey. Learn HTML,
                CSS, JavaScript & React — all in one crash course!
              </p>
              <ul className="list-unstyled">
                <li>
                  <strong>Instructor:</strong> Jonas Schmedtmann
                </li>
                <li>
                  <strong>Updated:</strong> November 2024
                </li>
                <li>
                  <strong>Duration:</strong> 12.5 hours · 71 lectures
                </li>
                <li>
                  <strong>Level:</strong> Beginner
                </li>
                <li>
                  <strong>Rating:</strong> ⭐ 4.8 (3,618 reviews)
                </li>
                <li>
                  <strong>Price:</strong> ₹3,889 ·{" "}
                  <span className="badge bg-warning text-dark">Premium</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function HeaderName({ name }) {
  return (
    <h1 className=" h1 fw-semibold text-capitalize text-center">{name}</h1>
  );
}
