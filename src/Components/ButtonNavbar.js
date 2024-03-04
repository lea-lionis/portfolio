export default function ButtonNavbar({ className, children, onClick }) {
  return (
    <button className={className + " hover:bg-blue-900 hover:no-underline hover:text-white active:bg-sky-700 text-right underline decoration-dashed decoration-2 underline-offset-4"} onClick={onClick}>{children}</button>
  )
}