export interface PostType {
  id: string;
  images: string[];
  caption: string;
  likes: number;
  postedAt: string;
  video: string;
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
      "https://images.unsplash.com/photo-1495837174058-628aafc7d610?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1500395173697-87c5338a896f?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    video: "",
    caption: "Enjoying the sunset!",
    user: {
      id: "u1",
      avatar_url:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image_url: "https://example.com/user1.jpg",
      username: "john_doe",
    },
    likes: 124,
    postedAt: "05 08 2024",
  },
  {
    id: "2",
    images: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    video: "",
    caption: "Delicious homemade pizza!",
    user: {
      id: "u2",
      avatar_url:
        "https://plus.unsplash.com/premium_photo-1682096343183-33dc522090ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image_url: "https://example.com/user2.jpg",
      username: "jane_smith",
    },
    likes: 89,
    postedAt: "12 07 2024",
  },
  {
    id: "3",
    images: [
      "https://plus.unsplash.com/premium_photo-1663045368440-51479515e0ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1682687221175-fd40bbafe6ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661842867772-6b29f45eb280?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    video: "",
    caption: "Hiking adventures in the mountains.",
    user: {
      id: "u3",
      avatar_url:
        "https://plus.unsplash.com/premium_photo-1695662723937-b10b1166d2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image_url: "https://example.com/user3.jpg",
      username: "alice_johnson",
    },
    likes: 156,
    postedAt: "22 06 2024",
  },
  {
    id: "4",
    images: [],
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    caption: "Morning coffee vibes.",
    user: {
      id: "u4",
      avatar_url:
        "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image_url: "https://example.com/user4.jpg",
      username: "bob_brown",
    },
    likes: 102,
    postedAt: "14 08 2024",
  },
  {
    id: "5",
    images: [
      "https://images.unsplash.com/photo-1496285705189-c290050257f1?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1536286144513-881bfbd3f292?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    video: "",
    caption: "Exploring the city at night.",
    user: {
      id: "u5",
      avatar_url:
        "https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image_url: "https://example.com/user5.jpg",
      username: "charlie_davis",
    },
    likes: 178,
    postedAt: "09 08 2024",
  },
  {
    id: "6",
    images: [
      "https://images.unsplash.com/photo-1577500729553-2bc7b3576db2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    video: "",
    caption: "A day at the Ladakh.",
    user: {
      id: "u6",
      avatar_url:
        "https://plus.unsplash.com/premium_photo-1679822641168-d84a115fc1ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image_url: "https://example.com/user6.jpg",
      username: "diana_evans",
    },
    likes: 134,
    postedAt: "28 07 2024",
  },
  {
    id: "7",
    images: [
      "https://images.unsplash.com/photo-1605472157184-72398dab72e9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    video: "",
    caption: "Beautiful autumn leaves.",
    user: {
      id: "u7",
      avatar_url:
        "https://images.unsplash.com/photo-1480072723304-5021e468de85?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image_url: "https://example.com/user7.jpg",
      username: "edward_foster",
    },
    likes: 95,
    postedAt: "18 06 2024",
  },
];
export default Posts;
