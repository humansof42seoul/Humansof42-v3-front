export default function FooterComponent() {
  return (
    <>
      <footer className="footer">
        <a href="https://github.com/humansof42seoul" rel="noopener noreferrer" target="_blank">
        <i className={["fab","fa-github", "fa-2x"].join(" ")}></i>
        </a>
        <a href="https://www.instagram.com/humans_of_42/" rel="noopener noreferrer" target="_blank">
        <i className={["fab", "fa-instagram", "fa-2x"].join(" ")}></i>
        </a>
      </footer>
      <style jsx>{`
        .footer {
          display: flex;
          flex: 1;
          padding: 2rem 0;
          border-top: 1px solid #eaeaea;
          justify-content: center;
          align-items: center;
        }
        .footer a {
            margin: 0.5rem;
        }
      `}</style>
    </>
  )
}
