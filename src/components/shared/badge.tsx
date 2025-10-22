export default function Badge({
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
        className={`${bg_color} flex w-auto items-center gap-2 rounded-[5px] px-3 py-1 text-xs font-semibold ${
          text_color == 'white' ? 'text-white' : 'text-black'
        }`}
      >
        <span>{icon}</span>
        {text}
      </p>
    </>
  );
}
