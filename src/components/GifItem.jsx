import "../styles.css";

export const GifItem  = ({title, url}) => {
  return (
    <div className="card">
        <img src={url} alt={title} loading="eager"
  layout="fixed"/>
        <p>{title}</p>
    </div>
  )
}
