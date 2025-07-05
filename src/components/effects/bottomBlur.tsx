export default function BottomBlur() {
    return (
        <div
            className="pointer-events-none fixed left-1/2 -translate-x-1/2 bottom-0 w-[90%] h-10 z-50"
            style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0) 100%)',
            filter: 'blur(4px)',
            }}
        ></div>
    )
}