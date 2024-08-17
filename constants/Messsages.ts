export interface MessageType {
  name: string;
  image_url: string;
  message: string;
}

const messages: MessageType[] = [
  {
    name: "Alice",
    image_url:
      "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message: "Hey there! How are you doing today?",
  },
  {
    name: "Jason Wang",
    image_url:
      "https://images.unsplash.com/photo-1619628554860-d13f5bd5dea9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message: "I'm working on the new project.",
  },
  {
    name: "Charlie Puth",
    image_url:
      "https://images.unsplash.com/photo-1620000617482-821324eb9a14?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message: "Did you get the email I sent yesterday?",
  },
  {
    name: "Diana James",
    image_url:
      "https://images.unsplash.com/photo-1606247193592-53da505571f8?q=80&w=473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message: "Looking forward to our meeting!",
  },
  {
    name: "Eve",
    image_url:
      "https://images.unsplash.com/photo-1583314965950-cd54a8b6db84?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message: "Great job on the presentation today",
  },
  {
    name: "Frank Paul",
    image_url:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=841&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message: "Let's grab lunch sometime this week.",
  },
  {
    name: "Grace",
    image_url:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message: "Let's grab some coffee!",
  },
  {
    name: "Akhil Palsra",
    image_url:
      "https://plus.unsplash.com/premium_photo-1703259736850-8e0a8b85564a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message: "The event was amazing",
  },
  {
    name: "Ivy",
    image_url:
      "https://images.unsplash.com/photo-1701197533948-7cc68e13283d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message: "I need help with my code, are you available?",
  },
  {
    name: "Jacky Chan",
    image_url:
      "https://images.unsplash.com/photo-1696394775165-6d11abb779a0?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message: "Let's schedule a meeting to discuss the new features.",
  },
];
export default messages;
