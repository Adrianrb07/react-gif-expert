
export const GifItem = ( { title, url, id } ) => {

  return (
    <div className="card">
        <img className="gif-image"  src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
