import { useParams } from "react-router-dom";

export default function About() {
  const { name } = useParams();
  return <h3>This is the About Page for {name}</h3>;
}