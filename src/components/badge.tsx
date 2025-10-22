export default function Badge({
  text,
  color,
  text_color,
}: {
  text: string;
  color: string;
  text_color: string;
}) {
  return (
    <p
      className={`${color} w-auto rounded-[5px] py-1 px-3 font-semibold text-xs ${
        text_color == "white" ? "text-white" : "text-black"
      }`}
    >
      {text}
    </p>
  );
}
