export function Search() {
  return (
    <div className="flex">
      <input type="text" placeholder="buscar productos..." className="bg-[#d9d9d9] px-3 py-1 text-sm w-48" />
      <button className="bg-[#a8a8a8] px-2">
        <span className="text-lg">›</span>
      </button>
    </div>
  )
}
