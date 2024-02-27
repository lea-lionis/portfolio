export default function ButtonFooter({ className, children, onClick }) {
  return (
    <button className={className + " outline outline-blue-900 outline-2 rounded-full px-12 hover:bg-sky-700"} onClick={onClick}>{children}</button>
  )
}  