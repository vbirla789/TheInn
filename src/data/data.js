import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
import room4 from "../assets/room4.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";

const first = {
  photos: [{ img: img13 }, { img: img2 }, { img: img3 }, { img: img4 }],
};

const pics = {
  photos: [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
    { img: img9 },
    { img: img10 },
    { img: img11 },
    { img: img12 },
    { img: img13 },
  ],
};
const fifth = {
  photos: [{ img: img11 }, { img: img10 }, { img: img12 }, { img: img13 }],
};

const sec = {
  img: img11,
  photos: [{ img1: img1 }, { img2: img2 }],
  title: "Welcome to The Inn",
  desc: "As you step through the charming entrance of the inn, you are immediately enveloped in a warm and inviting ambiance. The interior is adorned with rustic wooden furniture, soft lighting, and tasteful decorations that create a sense of nostalgia and tranquility.",
};

const third = {
  photos: [{ img: img6 }, { img: img7 }, { img: img8 }, { img: img9 }],
};

const fourth = {
  photo: img11,

  content: [
    {
      name: "Vishal Birla",
      img: img1,
      time: "3 months ago",
      review:
        "I recently had the pleasure of staying at the Luxe Haven Hotel during my visit to [city/location], and I must say, it was an absolute delight. From the moment I stepped foot into the lobby until the day of departure,",
    },
    {
      name: "Lakshya Sharma",
      img: img1,
      time: "2 months ago",
      review:
        "The room I stayed in was spacious, clean, and well-appointed. The bed was incredibly comfortable, and I had a great night's sleep. The amenities provided were top-notch, including a mini-fridge, coffee maker, and a large flat-screen TV.",
    },
    {
      name: "Harsh Jain",
      img: img1,
      time: "5 months ago",
      review:
        "One of the highlights of my stay was the delicious breakfast served in the morning. The inn offers a variety of options, from freshly baked pastries to hearty omelets made to order",
    },
    {
      name: "Anupama Sinha",
      img: img1,
      time: "6 months ago",
      review:
        "The location of the Cozy Haven Inn is also fantastic. It's nestled in a quiet neighborhood, providing a peaceful retreat, yet it's conveniently close to restaurants, shops, and attractions. The inn also offers complimentary bicycles",
    },
  ],
};

const room = {
  content: [
    {
      title: "Friendship",
      desc: "The location of the Cozy Haven Inn is also fantastic. It's nestled in a quiet neighborhood, providing a peaceful retreat, yet it's conveniently close to restaurants, shops, and attractions. The inn also offers complimentary bicycles",
      img: room1,
      reverse: false,
    },
    {
      title: "Deluxe Room W/O WC",
      desc: "The location of the Cozy Haven Inn is also fantastic. It's nestled in a quiet neighborhood, providing a peaceful retreat, yet it's conveniently close to restaurants, shops, and attractions. The inn also offers complimentary bicycles",
      img: room2,
      reverse: true,
    },
    {
      title: "Premium Room",
      desc: "The location of the Cozy Haven Inn is also fantastic. It's nestled in a quiet neighborhood, providing a peaceful retreat, yet it's conveniently close to restaurants, shops, and attractions. The inn also offers complimentary bicycles",
      img: room3,
      reverse: false,
    },
    {
      title: "Luxury Room",
      desc: "The location of the Cozy Haven Inn is also fantastic. It's nestled in a quiet neighborhood, providing a peaceful retreat, yet it's conveniently close to restaurants, shops, and attractions. The inn also offers complimentary bicycles",
      img: room4,
      reverse: true,
    },
  ],
};

const footerAPI = {
  titles: [{ title: "About INN" }, { title: "Get Help" }, { title: "Company" }],
  links: [
    [
      { link: "News" },
      { link: "Careers" },

      { link: "Prupose" },
      { link: "Sustainability" },
    ],
    [
      { link: "Payment Options" },
      { link: "Gift Card Balance" },
      { link: "Contact Us" },
      { link: "FAQ" },
      { link: "Blog" },
    ],
    [
      { link: "Gift Cards" },
      { link: "Promotions" },
      { link: "Find A Store" },
      { link: "Signup" },

      { link: "Send Us Feeback" },
    ],
  ],
};
export { first, pics, sec, third, fourth, fifth, room, footerAPI };
