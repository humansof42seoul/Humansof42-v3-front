type Interview = {
    title: string
    content: string
}

export default function Interview({title, content}: Interview) {
    return (
        <>
        <li>
            {title}
            {content}
        </li>
        </>
    )
}