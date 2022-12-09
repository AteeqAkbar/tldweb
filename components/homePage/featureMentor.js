import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from "./card";
import { getUsers } from "../../utils_firebase/users";
import { useEffect, useState } from "react";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const FeatureMentor = () => {
  const [Mentors, setMentors] = useState(false);
  // const Mentors = getAllMentors();
  useEffect(() => {
    async function name() {
      const users = await getUsers();
      console.log(users);
      setMentors(users);
    }
    name();
  }, []);

  if (!Mentors) {
    return <p>loading </p>;
  }

  const options = {
    margin: 10,
    responsiveClass: true,
    // nav: true,
    // dots: true,
    autoplay: true,
    smartSpeed: 1000,
    // navClass: ["owl-prev", "owl-next"],
    // // navText: [
    // //   '<i class="fas fa-angle-left"></i>',
    // //   '<i class="fas fa-angle-right"></i>',
    // // ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <Fragment>
      <h2 className="text-3xl px-2 mt-6 font-bold"> FeatureMentor</h2>
      <OwlCarousel
        className="owl-theme"
        loop
        dots={false}
        animateIn={true}
        {...options}
      >
        <Card mentors={Mentors} />
      </OwlCarousel>
    </Fragment>
  );
};

export default FeatureMentor;
