import events from "../mock/events.json";
import { Link, useParams } from "react-router";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "SocialDetails" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

// export async function loader({ params }: Route.LoaderArgs) {
//   // let team = await fetchTeam(params.teamId);
//   const event = events.items.find((event) => event.id === params.id);

//   return event ?? {};
// }

export default function SocialDetailsV2() {
  const { id } = useParams();

  // let team = await fetchTeam(params.teamId);
  const event = events.items.find((event) => event.id === id) ?? {};

  return (
    <main className="">
      <article
        className="card-expanded"
        style={{
          viewTransitionName: `card-${id}`,
        }}
      >
        <h1>Título</h1>
        <div>
          <Link to="/v2/" viewTransition>
            Back
          </Link>
        </div>

        <div>
          <Link to="/v2/" viewTransition>
            Back
          </Link>
        </div>
        <h1>social-details</h1>
        {event && (
          <div>
            <h2>{(event as any).summary}</h2>
            <p>
              {(event as any).start.date} to {(event as any).end.date}
            </p>
          </div>
        )}
      </article>
    </main>
  );
}
