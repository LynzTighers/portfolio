export default function SectionHeader({ index, title, note }) {
  return (
    <div className="section-header">
      <span className="section-header__index">{index}</span>
      <h2>{title}</h2>
      {note && <p>{note}</p>}
    </div>
  )
}
