export interface UserType {
  id: string;
  username: string;
  threadName: string;
  name: string;
  avatar_url: string;
  posts: number;
  followers: number;
  following: number;
  bio: string;
}

const User: UserType = {
  id: "1",
  username: "akhil_web",
  name: "Akhil Palsra",
  threadName: "@ akhil_web",
  avatar_url:
    "https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  posts: 15,
  followers: 9,
  following: 9,
  bio: "Peace is always better than revenge 🤍",
};
export default User;
