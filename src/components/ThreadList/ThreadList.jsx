import { Container } from "react-bootstrap";
import ThreadCard from "./ThreadCard";
import "./ThreadList.css";

export default function ThreadList({ threads, onSelect, goBack }) {
  const handleUpvote = () => {
    alert("Upvote clicked!");
  };
  const handleDownvote = () => {
    alert("Downvote clicked!");
  };

  return (
    <Container fluid className="px-0">
      {threads.map((thread, index) => (
        <ThreadCard
          key={index}
          thread={thread}
          onSelect={(thread) => onSelect(thread)}
        />
      ))}
    </Container>
  );
}