import { Box } from "@mui/material";
import * as S from "./styles";
import { Link } from "react-router";

const selectedSocial = {
  kind: "calendar#event",
  etag: '"3565583506558046"',
  id: "6tij8chp6ks66bb26hi62b9k64q66b9o68rjgbb2cpimcp9lcdij6cb66k",
  status: "confirmed",
  htmlLink:
    "https://www.google.com/calendar/event?eid=NnRpajhjaHA2a3M2NmJiMjZoaTYyYjlrNjRxNjZiOW82OHJqZ2JiMmNwaW1jcDlsY2RpajZjYjY2ayBwYXNkZWRldXgucHRAbQ",
  created: "2026-06-22T17:24:53.000Z",
  updated: "2026-06-30T03:55:53.279Z",
  summary: "Forró • Forró do Bela • 5€ ou 7€ ou 10€",
  description:
    "Mais info:\n\nhttps://www.instagram.com/reel/DWjYOQ-gthF/?igsh=MTFieThmZWlicXdzdA==\n\nAula 5€\nAula + Baile 10€\n\n\nAlô povo lindo\n✨ Amanhã, terça-feira, dia 30/06, tem muito forró da melhor qualidade com a Dj Bárbara Contumélias - Raba Fogosa ♥️ no *Forró do Bela* \n\n🥁 E para abrir o baile tem aula com a nossa professora da Marília Pedroza, com um tema super importante de ser desenvolvido, então proponho a todos a participar, porque é um tema bastante importante 👇🏼\n\n✨ *Como desenvolver a dança quando a pista está lotada*\nMovimentos e possibilidades dançantes para a dupla curtir a dança mesmo que o salão esteja apertado e cheinho de outras pessoas bailantes. Vem conhecer alternativas maravilhosas nessa aula.\n\nLink para inscrição para a aula: \n\nhttps://forms.gle/RkDaGdgTiYa95dng7\n\n🪙 Valor da aula: apenas 5€\n\nAula + baile: 10€\n\nSe quiser entrar para o grupo do Forró do Bela no WhatsApp, entre no link e participe do quiz semanal para concorrer a cortesias:\n\nhttps://chat.whatsapp.com/J7BvPHdhQrzLOHitXpDzx5?mode=gi_t\n\n🌞 *As terças-feiras mais felizes de Lisboa* 🌞\n\n________________&amp;_______________________\n\nTomorrow, Tuesday, June 30th, get ready for top-notch *forró* music with DJ Bárbara Contumélias – Raba Fogosa ♥️ at *Forró do Bela*\n\nTo kick things off, we’re hosting a class with instructor Marília Pedroza. She’ll be covering a crucial topic, so I encourage everyone to join in—it’s really important stuff! 👇🏼\n\n✨ *How to dance when the floor is packed*\nDiscover movements and dance options that let the couple enjoy the dance, even when the venue is tight and crowded with other dancers. Come explore some wonderful alternatives in this class.\n\nClass registration link:\n\nhttps://forms.gle/RkDaGdgTiYa95dng7\n\nIf you’d like to join the Forró do Bela WhatsApp group, follow the link and take part in the weekly quiz for a chance to win free passes.\n\n🔗https://chat.whatsapp.com/J7BvPHdhQrzLOHitXpDzx5?mode=gi_t\n\n🌞 *The most happy tuesdays In Lisbon* 🌞",
  location: "Casa de Pedra, Av. Dr. Arlindo Vicente, 1950-079 Lisboa, Portugal",
  creator: { email: "ateterca@gmail.com" },
  organizer: { email: "pasdedeux.pt@gmail.com", self: true },
  start: "2026-06-30T18:00:00.000Z",
  end: "2026-06-30T22:59:00.000Z",
  iCalUID:
    "6tij8chp6ks66bb26hi62b9k64q66b9o68rjgbb2cpimcp9lcdij6cb66k@google.com",
  sequence: 0,
  eventType: "default",
  genre: ["Forró"],
};

export default function SocialDetails() {
  return (
    <main className="page">
      <article
        className="card-expanded"
        style={{
          viewTransitionName: `card-${selectedSocial.id}`,
        }}
      >
      <h1>
        <Link to="/" viewTransition>Back</Link>
      </h1>
      <S.Head xpto>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {selectedSocial?.summary}
        </Box>
      </S.Head>
      <Box
        sx={{
          whiteSpaceCollapse: "preserve",
          p: 2,
          maxWidth: "calc(100vw - 32px)",
          textWrap: "wrap",
          overflow: "auto",
        }}
      >
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
        <div
          dangerouslySetInnerHTML={{
            __html: selectedSocial?.description || "",
          }}
        />
      </Box>
      </article>
    </main>
  );
}
