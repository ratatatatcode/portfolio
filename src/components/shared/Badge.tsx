export default function BadgeComponent({
  icon,
  text,
  bg_color,
  text_color,
}: {
  icon?: React.ReactNode;
  text: string;
  bg_color: string;
  text_color: string;
}) {
  return (
    <>
      <p
        className={`${bg_color} flex w-auto items-center gap-2 rounded-md border border-slate-300 px-3.5 py-2 text-sm font-medium ${
          text_color === 'white' ? 'text-white' : text_color === 'blue' ? 'text-blue-700' : 'text-slate-600'
        }`}
      >
        <span>{icon}</span>
        {text}
      </p>
    </>
  );
}
