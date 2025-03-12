import PropTypes from 'prop-types'


export const GifItem = ( { title, url, id } ) => {

  return (
    <div className="card">
        <img className="gif-image"  src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}