import "bootstrap/dist/css/bootstrap.min.css";
import { PostProvider } from "./contexts/PostContext";
import RoutesPost from "./routes/RoutesPost";

function App() {
  return (
    <PostProvider>
      <RoutesPost />
    </PostProvider>
  );
}

export default App;
