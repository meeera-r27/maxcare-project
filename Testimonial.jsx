import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { testimonialStyles } from "../assets/dummyStyles";

const Testimonial = () => {
  const scrollRefLeft = useRef(null);
  const scrollRefRight = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Jayareshmi",
      role: "General Physician",
      rating: 4.7,
      text: "The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care.",
      image:
        "https://t3.ftcdn.net/jpg/05/75/02/80/240_F_575028015_c3fpRR3xrlCG77tuFc7Sj2MZct9cr8ub.jpg",
      type: "doctor",
    },
    {
      id: 2,
      name: "Ajay",
      role: "Patient",
      rating: 5,
      text: "Scheduling appointments has never been easier. The interface is intuitive and reminders are very helpful!",
      image:
        "https://t4.ftcdn.net/jpg/13/15/99/65/240_F_1315996598_cN8mRLetwYGp2LNicSQDZAot7crBKEyZ.jpg",
      type: "patient",
    },
    {
      id: 3,
      name: "Dr. HariKrishnan",
      role: "Pediatrician",
      rating: 4,
      text: "This platform has streamlined our clinic operations significantly. Patient management is much more organized.",
      image:
        "https://t4.ftcdn.net/jpg/06/13/28/69/240_F_613286945_BJ7rUxmhftMxfNtyyfnwDwuD2CxK8YQM.jpg",
      type: "doctor",
    },
    {
      id: 4,
      name: "Rohini A Krishna",
      role: "Patient",
      rating: 5,
      text: "Booking appointments online 24/7 is a game-changer. The confirmation system gives me peace of mind.",
      image:
        "https://t4.ftcdn.net/jpg/05/98/26/41/240_F_598264162_fzK2XW4uAQjOxj6rKQRuNlmbniHEBRsE.jpg",
      type: "patient",
    },
    {
      id: 5,
      name: "Dr. Aisha Rahman",
      role: "Dermatologist",
      rating: 5,
      text: "Excellent platform for managing appointments. Automated reminders reduce no-shows dramatically.",
      image:
        "https://t3.ftcdn.net/jpg/06/02/09/70/240_F_602097061_tRkwoe0dopzjXzEZQSzjUXCR2D6zq5GA.jpg",
      type: "doctor",
    },
    {
      id: 6,
      name: "Krishna Kumar",
      role: "Patient",
      rating: 5,
      text: "The wait time has reduced significantly since using this platform. Very convenient and user-friendly!",
      image:
        "https://t4.ftcdn.net/jpg/06/40/07/03/240_F_640070383_9LJ3eTRSvOiwKyrmBYgcjhSlckDnNcxl.jpg",
      type: "patient",
    },
  ];

  const leftTestimonials = testimonials.filter((t) => t.type === "doctor");
  const rightTestimonials = testimonials.filter((t) => t.type === "patient");

  useEffect(() => {
    const scrollLeft = scrollRefLeft.current;
    const scrollRight = scrollRefRight.current;
    if (!scrollLeft || !scrollRight) return;

    let scrollSpeed = 0.5; // preserved animation speed
    let rafId;

    const smoothScroll = () => {
      if (!isPaused) {
        scrollLeft.scrollTop += scrollSpeed;
        scrollRight.scrollTop -= scrollSpeed;

        // seamless infinite loop
        if (scrollLeft.scrollTop >= scrollLeft.scrollHeight / 2) {
          scrollLeft.scrollTop = 0;
        }
        if (scrollRight.scrollTop <= 0) {
          scrollRight.scrollTop = scrollRight.scrollHeight / 2;
        }
      }
      rafId = requestAnimationFrame(smoothScroll);
    };

    rafId = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={
          i < rating
            ? testimonialStyles.activeStar
            : testimonialStyles.inactiveStar
        }
      >
        <Star className={testimonialStyles.star} />
      </span>
    ));

  const TestimonialCard = ({ testimonial, direction }) => (
    <div
      className={`${testimonialStyles.testimonialCard} ${
        direction === "left"
          ? testimonialStyles.leftCardBorder
          : testimonialStyles.rightCardBorder
      }`}
    >
      <div className={testimonialStyles.cardContent}>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className={testimonialStyles.avatar}
        />
        <div className={testimonialStyles.textContainer}>
          <div className={testimonialStyles.nameRoleContainer}>
            <div>
              <h4
                className={`${testimonialStyles.name} ${
                  direction === "left"
                    ? testimonialStyles.leftName
                    : testimonialStyles.rightName
                }`}
              >
                {testimonial.name}
              </h4>
              <p className={testimonialStyles.role}>{testimonial.role}</p>
            </div>
            <div className={testimonialStyles.starsContainer}>
              {renderStars(testimonial.rating)}
            </div>
          </div>

          <p className={testimonialStyles.quote}>"{testimonial.text}"</p>

          {/* Stars on small screens beneath text */}
          <div className={testimonialStyles.mobileStarsContainer}>
            {renderStars(testimonial.rating)}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={testimonialStyles.container}>
      <div className={testimonialStyles.headerContainer}>
        <h2 className={testimonialStyles.title}>Voices of Trust</h2>
        <p className={testimonialStyles.subtitle}>
          Real stories from doctors and patients sharing their positive
          experiences with our healthcare platform.
        </p>
      </div>

      <div
        className={testimonialStyles.grid}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left (Doctors) */}
        <div
          className={`${testimonialStyles.columnContainer} ${testimonialStyles.leftColumnBorder}`}
        >
          <div
            className={`${testimonialStyles.columnHeader} ${testimonialStyles.leftColumnHeader}`}
          >
            👩‍⚕️ Medical Professionals
          </div>
          <div
            ref={scrollRefLeft}
            className={testimonialStyles.scrollContainer}
            // touch support: pause while swiping
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {[...leftTestimonials, ...leftTestimonials].map((t, i) => (
              <TestimonialCard
                key={`L-${i}`}
                testimonial={t}
                direction="left"
              />
            ))}
          </div>
        </div>

        {/* Right (Patients) */}
        <div
          className={`${testimonialStyles.columnContainer} ${testimonialStyles.rightColumnBorder}`}
        >
          <div
            className={`${testimonialStyles.columnHeader} ${testimonialStyles.rightColumnHeader}`}
          >
            🧑‍💼 Patients
          </div>

          <div
            ref={scrollRefRight}
            className={testimonialStyles.scrollContainer}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {[...rightTestimonials, ...rightTestimonials].map((t, i) => (
              <TestimonialCard
                key={`R-${i}`}
                testimonial={t}
                direction="right"
              />
            ))}
          </div>
        </div>
      </div>

      {/* helper styles */}
      <style>{testimonialStyles.animationStyles}</style>
    </div>
  );
};

export default Testimonial;
