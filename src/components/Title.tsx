export function Title({ text, className }: { text: string, className?: string }) {
    return (
        <h2 className={`font-open uppercase text-[40px] font-bold text-[#343a40] ${className}`}>{text}</h2>
    )
}