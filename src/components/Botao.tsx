interface BotaoProps {
    children: any
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'bg-gradient-to-r from-blue-500 to-purple-500'
    return (
        <button
            onClick={props.onClick}
            className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md 
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}