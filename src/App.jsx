import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { useState } from "react";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
const courses = [
  {
    mainCourses: [
      {
        title: "The Web Developer Bootcamp 2025",
        instructor: "Colt Steele",
        rating: 4.7,
        reviews: 282314,
        price: "₹3,229",
        image: "https://img.youtube.com/vi/S7MyHChb8-E/maxresdefault.jpg", // Colt Steele bootcamp review
      },
      {
        title: "Complete web development course",
        instructor: "Hitesh Choudhary",
        rating: 4.6,
        reviews: 13845,
        price: "₹3,089",
        image: "https://img.youtube.com/vi/KZ31wDjYleI/maxresdefault.jpg", // Hitesh Choudhary promo
      },
      {
        title: "Angular - The Complete Guide (2025 Edition)",
        instructor: "Maximilian Schwarzmüller",
        rating: 4.7,
        reviews: 217263,
        price: "₹3,229",
        image: "https://img.youtube.com/vi/g8OUivf2DM4/maxresdefault.jpg", // Angular course review
      },
      {
        title: "JavaScript - The Complete Guide 2025 (Beginner + Advanced)",
        instructor: "Academind by Maximilian Schwarzmüller",
        rating: 4.6,
        reviews: 32058,
        price: "₹4,469",
        image: "https://img.youtube.com/vi/Flfw0V8nZCY/maxresdefault.jpg", // JavaScript course thumbnail
      },
    ],
    recommendedForYou: [
      {
        title: "Advanced Tailwind CSS & Shadcn UI",
        instructor: "DesignCode",
        rating: 4.8,
        reviews: 11234,
        price: "₹3,999",
        image: "https://img.youtube.com/vi/NTZ1SwQzCMs/maxresdefault.jpg",
      },

      {
        title: "Styled Components & Design Systems",
        instructor: "Kevin Powell",
        rating: 4.6,
        reviews: 10321,
        price: "₹3,199",
        image: "https://img.youtube.com/vi/02zO0hZmwnw/maxresdefault.jpg",
      },
      {
        title: "React Icons & UI Polish Techniques",
        instructor: "Codevolution",
        rating: 4.7,
        reviews: 9211,
        price: "₹2,499",
        image: "https://img.youtube.com/vi/3qBXWUpoPHo/maxresdefault.jpg",
      },
      {
        title: "Building Responsive Layouts with Tailwind",
        instructor: "Traversy Media",
        rating: 4.8,
        reviews: 11842,
        price: "₹3,399",
        image: "https://img.youtube.com/vi/UBOj6rqRUME/maxresdefault.jpg",
      },
    ],
    basedOnRecentSearches: [
      {
        title: "React - The Complete Guide (incl. Hooks, React Router, Redux)",
        instructor: "Maximilian Schwarzmüller",
        rating: 4.7,
        reviews: 214531,
        price: "₹3,199",
        image: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
      },
      {
        title: "MongoDB - The Complete Developer’s Guide 2024",
        instructor: "Academind by Maximilian Schwarzmüller",
        rating: 4.6,
        reviews: 50312,
        price: "₹2,899",
        image: "https://img-c.udemycdn.com/course/240x135/1906852_93c6_2.jpg",
      },
      {
        title: "Node.js: Advanced Concepts",
        instructor: "Stephen Grider",
        rating: 4.7,
        reviews: 43129,
        price: "₹3,399",
        image:
          "https://bing.com/th/id/BCO.925bbac8-ce5a-4eab-a97c-91d0df6f7328.png",
      },
      {
        title: "React Native - The Practical Guide [2024]",
        instructor: "Academind by Maximilian Schwarzmüller",
        rating: 4.7,
        reviews: 52417,
        price: "₹3,499",
        image: "https://img-c.udemycdn.com/course/240x135/1436092_2024_3.jpg",
      },
    ],
    learnersAreViewing: [
      {
        title: "Next.js 14 & App Router Mastery",
        instructor: "Codevolution",
        rating: 4.7,
        reviews: 15974,
        price: "₹3,299",
        image: "https://img.youtube.com/vi/VL7cCTfFRGs/maxresdefault.jpg",
      },
      {
        title: "Full Stack Authentication with JWT & OAuth",
        instructor: "Traversy Media",
        rating: 4.7,
        reviews: 22451,
        price: "₹3,749",
        image: "https://img.youtube.com/vi/d2EkZTlUAbE/maxresdefault.jpg",
      },
      {
        title: "React Testing with Jest & RTL",
        instructor: "Laith Harb",
        rating: 4.5,
        reviews: 8472,
        price: "₹2,699",
        image: "https://img.youtube.com/vi/Flo268xRpV0/maxresdefault.jpg",
      },
      {
        title: "React Toastify & Notification UX",
        instructor: "Codevolution",
        rating: 4.6,
        reviews: 6231,
        price: "₹2,499",
        image: "https://img.youtube.com/vi/1vR2Z0cXnGg/maxresdefault.jpg",
      },
      {
        title: "Carousel Components with Swiper.js",
        instructor: "Academind",
        rating: 4.7,
        reviews: 7892,
        price: "₹2,899",
        image: "https://img.youtube.com/vi/5Y2EiZy3jZQ/maxresdefault.jpg",
      },
    ],
    recommendedBasedOnRatings: [
      {
        title: "Professional UI/UX Design with Tailwind & Shadcn",
        instructor: "DesignCode",
        rating: 4.8,
        reviews: 9721,
        price: "₹4,499",
        image: "https://img.youtube.com/vi/NTZ1SwQzCMs/maxresdefault.jpg",
      },
      {
        title: "TypeScript for React Developers",
        instructor: "Academind",
        rating: 4.6,
        reviews: 18734,
        price: "₹2,999",
        image: "https://img.youtube.com/vi/8NATZa6mhh4/maxresdefault.jpg",
      },
      {
        title: "React - The Complete Guide 2025",
        instructor: "Academind",
        rating: 4.6,
        reviews: 232513,
        price: "₹3,779",
        image: "https://img.youtube.com/vi/RceMRzibELU/maxresdefault.jpg",
      },
      {
        title: "Angular - The Complete Guide 2025",
        instructor: "Maximilian Schwarzmüller",
        rating: 4.7,
        reviews: 217263,
        price: "₹3,229",
        image: "https://img.youtube.com/vi/g8OUivf2DM4/maxresdefault.jpg",
      },
      {
        title: "JavaScript - The Complete Guide 2025",
        instructor: "Academind",
        rating: 4.6,
        reviews: 32058,
        price: "₹4,469",
        image: "https://img.youtube.com/vi/Flfw0V8nZCY/maxresdefault.jpg",
      },
    ],
  },
];

// const wishList = [
//   {
//     title: "Next.js 14 & App Router Mastery",
//     instructor: "Codevolution",
//     rating: 4.7,
//     reviews: 15974,
//     price: "₹3,299",
//     image: "https://img.youtube.com/vi/VL7cCTfFRGs/maxresdefault.jpg", // Example thumbnail from a crash course
//   },
//   {
//     title: "Professional UI/UX Design with Tailwind & Shadcn",
//     instructor: "DesignCode",
//     rating: 4.8,
//     reviews: 9721,
//     price: "₹4,499",
//     image: "https://img.youtube.com/vi/NTZ1SwQzCMs/maxresdefault.jpg", // Shadcn UI full course
//   },
//   {
//     title: "TypeScript for React Developers",
//     instructor: "Academind",
//     rating: 4.6,
//     reviews: 18734,
//     price: "₹2,999",
//     image: "https://img.youtube.com/vi/8NATZa6mhh4/maxresdefault.jpg", // TypeScript for React devs
//   },
//   {
//     title: "Full Stack Authentication with JWT & OAuth",
//     instructor: "Traversy Media",
//     rating: 4.7,
//     reviews: 22451,
//     price: "₹3,749",
//     image: "https://img.youtube.com/vi/d2EkZTlUAbE/maxresdefault.jpg", // Auth basics
//   },
//   {
//     title: "React Testing with Jest & React Testing Library",
//     instructor: "Laith Harb",
//     rating: 4.5,
//     reviews: 8472,
//     price: "₹2,699",
//     image: "https://img.youtube.com/vi/Flo268xRpV0/maxresdefault.jpg", // Testing tutorial
//   },
// ];

const cart = [
  {
    title: "Node.js Masterclass - Build REST APIs",
    instructor: "Jonas Schmedtmann",
    rating: 4.8,
    reviews: 127645,
    price: "₹3,499",
  },
  {
    title: "Tailwind CSS From Scratch",
    instructor: "Brad Traversy",
    rating: 4.7,
    reviews: 45291,
    price: "₹2,849",
  },
  {
    title: "Redux Toolkit & React Query in Practice",
    instructor: "Codevolution",
    rating: 4.6,
    reviews: 8742,
    price: "₹2,979",
  },
  {
    title: "Mastering Framer Motion for React",
    instructor: "Dev Ed",
    rating: 4.5,
    reviews: 13124,
    price: "₹3,199",
  },
  {
    title: "Full Stack MERN with Authentication & Deployment",
    instructor: "Traversy Media",
    rating: 4.8,
    reviews: 65327,
    price: "₹4,099",
  },
];

export default function App() {
  const [wishList, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  // console.log(wishList);
  console.log(cart);

  //! Add Course to wishlist
  function addtoWishlist(course) {
    if (wishList.some((curr) => curr.title === course.title)) {
      toast.error("course already added");
      return;
    } else if (cart.some((curr) => curr.title === course.title)) {
      toast.error("course already available in cart");

      return;
    } else {
      setWishlist((wishList) => [...wishList, course]);
      toast.success("course added to Wishlist");
    }
  }

  // wishList to cart
  function wishListToCart(e, item) {
    if (cart.some((curr) => curr.title === item.title)) {
      toast.error("course already available in cart");
      setWishlist((wishList) =>
        wishList.filter((curr) => curr.title !== item.title)
      );
      return;
    } else {
      setTimeout(() => {
        setCart((cart) => [...cart, item]);
        setWishlist((wishList) =>
          wishList.filter((curr) => curr.title !== item.title)
        );
        toast.success("course added to cart");
      }, 500);
    }
  }

  // ! Add course to cart
  function addtoCart(course) {
    if (cart.some((curr) => curr.title === course.title)) {
      toast.error("course already added");
      return;
    }

    setCart((cart) => [...cart, course]);
    toast.success("course added to Cart");
  }

  // ! remove Course from Cart
  function removeFromCart(course) {
    // if (cart.some((curr) => curr.title === course.title)) {
    //   toast.error("course already added");
    //   return;
    // }

    // setCart((cart) => [
    //   cart.filter((course) => cart.title !== course.title),
    // ]);
    setCart((cart) => cart.filter((curr) => curr.title !== course.title));
    toast.warning("course removed from the cart");
  }

  return (
    <>
      <NavBar
        courses={courses}
        wishList={wishList}
        cart={cart}
        wishListToCart={wishListToCart}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              courses={courses}
              onAddtoWishlist={addtoWishlist}
              onAddtoCart={addtoCart}
              wishList={wishList}
              cart={cart}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onRemoveFromCart={removeFromCart}
              setCart={setCart}
            />
          }
        ></Route>
      </Routes>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        closeOnClick={true}
        theme="colored"
        pauseOnHover={false}
      />
    </>
  );
}
