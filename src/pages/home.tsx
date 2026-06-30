import { Link } from "react-router";
import events from "../mock/events.json";
import SocialItem from "../components/SocialItem";

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        {events.items.map((event) => (
          <Link to={`/v2/${event.id}`} viewTransition key={event.id}>
            <SocialItem ev={event} />
          </Link>
        ))}
      </div>
    </main>
  );
}
