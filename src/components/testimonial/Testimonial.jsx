import React from "react";
import "./testimonial.css";
import AV1 from "../../assets/avatar1.jpg";
import AV2 from "../../assets/avatar2.jpg";
import AV3 from "../../assets/avatar3.jpg";
import AV4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AV1,
    name: "Tina Snow",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa earum autem laborum amet fuga! Omnis quaerat modi similique id voluptas, magni suscipit est nobis dolores sequi porro deleniti doloribus voluptatum? Placeat magni officiis illum nulla ducimus debitis possimus a repudiandae?",
  },

  {
    avatar: AV2,
    name: "Shatta wale",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa earum autem laborum amet fuga! Omnis quaerat modi similique id voluptas, magni suscipit est nobis dolores sequi porro deleniti doloribus voluptatum? Placeat magni officiis illum nulla ducimus debitis possimus a repudiandae?",
  },

  {
    avatar: AV3,
    name: "Kwane Wale",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa earum autem laborum amet fuga! Omnis quaerat modi similique id voluptas, magni suscipit est nobis dolores sequi porro deleniti doloribus voluptatum? Placeat magni officiis illum nulla ducimus debitis possimus a repudiandae?",
  },

  {
    avatar: AV4,
    name: "Jhon Snow",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa earum autem laborum amet fuga! Omnis quaerat modi similique id voluptas, magni suscipit est nobis dolores sequi porro deleniti doloribus voluptatum? Placeat magni officiis illum nulla ducimus debitis possimus a repudiandae?",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review From Client</h5>
      <h2>Testimonial</h2>
      <Swiper
        className="container testimonial__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* have to install swiper js by command npm install swiper */}
    </section>
  );
};

export default Testimonial;
