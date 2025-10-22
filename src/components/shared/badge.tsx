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
        className={`${bg_color} w-auto rounded-[5px] py-1 px-3 font-semibold text-xs flex items-center gap-2 ${
          text_color == "white" ? "text-white" : "text-black"
        }`}
      >
        <span>{icon}</span>
        {text}
      </p>
    </>
  );
}
