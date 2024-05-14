import "./style.css"

export default function Footer() {
  const date = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>Copyright &copy;{date} Paulo Jr</p>
    </footer>
  )
}