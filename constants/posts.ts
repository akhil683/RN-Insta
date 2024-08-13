export interface PostType {
  id: string;
  images: string[];
  image_url: string;
  caption: string;
  user: {
    id: string;
    avatar_url: string;
    image_url: string;
    username: string;
  };
}

const Posts: PostType[] = [
  {
    id: "1",
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image1_2.jpg",
    ],
    image_url: "",
    caption: "Enjoying the sunset!",
    user: {
      id: "u1",
      avatar_url: "https://example.com/avatar1.jpg",
      image_url: "https://example.com/user1.jpg",
      username: "john_doe",
    },
  },
  {
    id: "2",
    images: ["https://example.com/image2.jpg"],
    image_url: "",
    caption: "Delicious homemade pizza!",
    user: {
      id: "u2",
      avatar_url: "https://example.com/avatar2.jpg",
      image_url: "https://example.com/user2.jpg",
      username: "jane_smith",
    },
  },
  {
    id: "3",
    images: [
      "https://example.com/image3.jpg",
      "https://example.com/image3_2.jpg",
      "https://example.com/image3_3.jpg",
    ],
    image_url: "",
    caption: "Hiking adventures in the mountains.",
    user: {
      id: "u3",
      avatar_url: "https://example.com/avatar3.jpg",
      image_url: "https://example.com/user3.jpg",
      username: "alice_johnson",
    },
  },
  {
    id: "4",
    images: ["https://example.com/image4.jpg"],
    image_url: "",
    caption: "Morning coffee vibes.",
    user: {
      id: "u4",
      avatar_url: "https://example.com/avatar4.jpg",
      image_url: "https://example.com/user4.jpg",
      username: "bob_brown",
    },
  },
  {
    id: "5",
    images: [
      "https://example.com/image5.jpg",
      "https://example.com/image5_2.jpg",
    ],
    image_url: "",
    caption: "Exploring the city at night.",
    user: {
      id: "u5",
      avatar_url: "https://example.com/avatar5.jpg",
      image_url: "https://example.com/user5.jpg",
      username: "charlie_davis",
    },
  },
  {
    id: "6",
    images: ["https://example.com/image6.jpg"],
    image_url: "",
    caption: "A day at the beach.",
    user: {
      id: "u6",
      avatar_url: "https://example.com/avatar6.jpg",
      image_url: "https://example.com/user6.jpg",
      username: "diana_evans",
    },
  },
  {
    id: "7",
    images: ["https://example.com/image7.jpg"],
    image_url: "",
    caption: "Beautiful autumn leaves.",
    user: {
      id: "u7",
      avatar_url: "https://example.com/avatar7.jpg",
      image_url: "https://example.com/user7.jpg",
      username: "edward_foster",
    },
  },
  {
    id: "8",
    images: [
      "https://example.com/image8.jpg",
      "https://example.com/image8_2.jpg",
    ],
    image_url: "",
    caption: "Cozy reading corner.",
    user: {
      id: "u8",
      avatar_url: "https://example.com/avatar8.jpg",
      image_url: "https://example.com/user8.jpg",
      username: "fiona_green",
    },
  },
  {
    id: "9",
    images: ["https://example.com/image9.jpg"],
    image_url: "",
    caption: "Sunrise over the lake.",
    user: {
      id: "u9",
      avatar_url: "https://example.com/avatar9.jpg",
      image_url: "https://example.com/user9.jpg",
      username: "george_hill",
    },
  },
  {
    id: "10",
    images: [
      "https://example.com/image10.jpg",
      "https://example.com/image10_2.jpg",
      "https://example.com/image10_3.jpg",
    ],
    image_url: "",
    caption: "Late-night coding session.",
    user: {
      id: "u10",
      avatar_url: "https://example.com/avatar10.jpg",
      image_url: "https://example.com/user10.jpg",
      username: "hannah_lee",
    },
  },
];
export default Posts;
