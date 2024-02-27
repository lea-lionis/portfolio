export default function ButtonNavbar({ className, children, onClick }) {
  return (
    <button className={className + " hover:bg-sky-400 active:bg-sky-700"} onClick={onClick}>{children}</button>
  )
}