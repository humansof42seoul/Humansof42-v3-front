import Image from 'next/image'
type Props = {
  name: string
  role: string
  gitId: string
  imgLocation: string
}

export default function Member({ name, role, gitId, imgLocation }: Props) {
  return (
    <>
      <div className="member-container">
        <div className="member-img-wrapper">
          <Image
            src={imgLocation}
            alt={gitId}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </div>
        <div className="name">{name}</div>
        <div className="role">{role}</div>
      </div>
      <style jsx>{`
        .member-container {
          cursor: pointer;
          position: relative;
          display: block;
          margin-left: 1rem;
          margin-right: 1rem;
          margin-bottom: 45px;
          overflow: hidden;
          text-align: center;
        }
        .member-img-wrapper {
          max-width: 9rem;
          border-radius: 50%;
          overflow: hidden;
        }
        .name {
          font-size: 1.5rem;
        }
      `}</style>
    </>
  )
}
