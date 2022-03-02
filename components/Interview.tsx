import Link from 'next/link'

type Interview = {
  id: number
  title: string
  content: string
}

export default function Interview({ id, title, content }: Interview) {
  return (
    <>
      <li key={id}>
        <Link
          href={{
            pathname: 'interviews/id',
            query: { id: id },
          }}
        >
          {title}
        </Link>
        {content}
      </li>
    </>
  )
}
