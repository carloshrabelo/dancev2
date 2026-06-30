import useEventAPI, { type EventImproved } from "../../store/useEventAPI";
import type { Genre } from "../../const/GENRES";
import Item from "../Item";
import * as S from "./styles";
import groupBy from "lodash/groupBy";
import { Box, Divider, Drawer } from "@mui/material";
import { Fragment, useState } from "react";
import { X } from "@phosphor-icons/react";
import { palette } from "../../theme/palette";

export default function AlignItemsList({ filters }: { filters: Genre[] }) {
  const { data, isLoading, error } = useEventAPI({ genres: filters });
  const [selectedSocial, setSelectedSocial] = useState<EventImproved | null>(
    null,
  );

  if (isLoading) return null;
  if (error) return error;

  const xpto = groupBy(data, ({ start }: EventImproved) => {
    const currentDate = new Date(start.toISOString());
    currentDate.setUTCHours(0, 0, 0, 0);
    return currentDate.toISOString();
  });

  return (
    <>
      <div>
        <button className="btn btn-xs">Xsmall</button>
        <button className="btn btn-sm">Small</button>
        <button className="btn">Medium</button>
        <button className="btn btn-lg">Large</button>
        <button className="btn btn-xl">Xlarge</button>
      </div>
      <div>
        <div className="badge badge-info">
          <svg
            className="size-[1em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></circle>
              <path
                d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></path>
              <circle
                cx="12"
                cy="7.25"
                r="1.25"
                fill="currentColor"
                strokeWidth="2"
              ></circle>
            </g>
          </svg>
          Info
        </div>
        <div className="badge badge-success">
          <svg
            className="size-[1em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></circle>
              <polyline
                points="7 13 10 16 17 8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></polyline>
            </g>
          </svg>
          Success
        </div>
        <div className="badge badge-warning">
          <svg
            className="size-[1em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
          >
            <g fill="currentColor">
              <path
                d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <line
                x1="9"
                y1="6.5"
                x2="9"
                y2="10"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></line>
              <path
                d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z"
                fill="currentColor"
                data-stroke="none"
                stroke="none"
              ></path>
            </g>
          </svg>
          Warning
        </div>
        <div className="badge badge-error">
          <svg
            className="size-[1em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor">
              <rect
                x="1.972"
                y="11"
                width="20.056"
                height="2"
                transform="translate(-4.971 12) rotate(-45)"
                fill="currentColor"
                strokeWidth={0}
              ></rect>
              <path
                d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z"
                strokeWidth={0}
                fill="currentColor"
              ></path>
            </g>
          </svg>
          Error
        </div>
      </div>
      <div className="dock dock-sm">
        <button>
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <polyline
                points="1 11 12 2 23 11"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></polyline>
              <path
                d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></path>
              <line
                x1="12"
                y1="22"
                x2="12"
                y2="18"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></line>
            </g>
          </svg>
        </button>

        <button className="dock-active">
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <polyline
                points="3 14 9 14 9 17 15 17 15 14 21 14"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></polyline>
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                ry="2"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></rect>
            </g>
          </svg>
        </button>

        <button>
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <circle
                cx="12"
                cy="12"
                r="3"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></circle>
              <path
                d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></path>
            </g>
          </svg>
        </button>
      </div>

      <Box sx={{ px: 2 }}>
        {Object.entries(xpto).map(
          ([date, sociais]: [string, EventImproved[]]) => (
            <div key={date}>
              <S.Head>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      color: palette["dark-gray"].main,
                      textTransform: "capitalize",
                      fontSize: "12px",
                    }}
                  >
                    {new Intl.DateTimeFormat("pt-BR", {
                      weekday: "long",
                    }).format(new Date(date))}
                  </Box>
                  <div>
                    {new Intl.DateTimeFormat("pt-BR", {
                      day: "2-digit",
                      month: "long",
                    }).format(new Date(date))}
                  </div>
                  <Box
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "12px",
                    }}
                  >
                    {new Intl.DateTimeFormat("pt-BR", {
                      weekday: "long",
                    }).format(new Date(date))}
                  </Box>
                </Box>
              </S.Head>
              <S.Content>
                {sociais?.map((ev, key) => (
                  <Fragment key={ev.id}>
                    {!!key && <Divider sx={{ mx: 2 }} />}
                    <Item {...ev} onClick={() => setSelectedSocial(ev)} />
                  </Fragment>
                ))}
              </S.Content>
              <S.Footer>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      color: palette["dark-gray"].main,
                      textTransform: "capitalize",
                      fontSize: "12px",
                    }}
                  >
                    {new Intl.DateTimeFormat("pt-BR", {
                      weekday: "long",
                    }).format(new Date(date))}
                  </Box>
                  <div>
                    {new Intl.DateTimeFormat("pt-BR", {
                      day: "2-digit",
                      month: "long",
                    }).format(new Date(date))}
                  </div>
                  <Box
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "12px",
                    }}
                  >
                    {new Intl.DateTimeFormat("pt-BR", {
                      weekday: "long",
                    }).format(new Date(date))}
                  </Box>
                </Box>
              </S.Footer>
            </div>
          ),
        )}
      </Box>

      <Drawer
        open={!!selectedSocial}
        onClose={() => setSelectedSocial(null)}
        anchor="right"
      >
        <Box>
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
              <div>
                <S.CloseBtn color="red" onClick={() => setSelectedSocial(null)}>
                  <X weight="bold" />
                </S.CloseBtn>
              </div>
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
        </Box>
      </Drawer>
    </>
  );
}
