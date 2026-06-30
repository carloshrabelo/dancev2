export default function SocialItem({ ev: event }: any) {
  return (
    <article
      className="card gap-2"
      style={{
        viewTransitionName: `card-${event.id}`,
      }}
    >
      <div className="gap-2 flex flex-row">
        <div className="bg-gray-200 max-h-12 min-w-12"></div>
        <div className="flex flex-col gap-1">
          <h2 className="text-gray-700 dark:text-gray-200">{event.summary}</h2>
          <div className="flex gap-2 text-gray-500 dark:text-gray-400 text-sm gap">
            <span>{event.start.date}</span>
            <span>{event.end.date}</span>
          </div>
          <div>
            <span className="badge badge-xs badge-soft badge-primary">
              Xsmall
            </span>
            <span className="badge badge-xs badge-soft badge-secondary">
              Xsmall
            </span>
            <span className="badge badge-xs badge-soft badge-accent">
              Xsmall
            </span>
          </div>
        </div>
      </div>
      <hr className="border-gray-200" />
      <div className="flex flex-row justify-end gap-2">
        <div className="btn btn-sm min-w-20">Rota</div>
        <div className="btn btn-sm min-w-20">Salvar</div>
        <div className="btn btn-sm min-w-20">Detalhes</div>
      </div>
    </article>
  );
}
