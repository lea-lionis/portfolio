export default function ButtonFooter({ className, children, onClick }) {
  return (
    <button className={className + " outline outline-blue-900 outline-2 rounded-full pl-16 mr-8 pr-5 py-1.5 hover:bg-blue-900 hover:text-white text-right"} onClick={onClick}>{children}</button>
  )
}  