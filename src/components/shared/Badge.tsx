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
        className={`${bg_color} flex w-auto items-center gap-2 rounded-md border border-brand-dark/20 px-3.5 py-2 text-sm font-medium ${
          text_color === 'white' ? 'text-white' : text_color === 'blue' ? 'text-brand-strong' : 'text-brand-dark/70'
        }`}
      >
        <span>{icon}</span>
        {text}
      </p>
    </>
  );
}
