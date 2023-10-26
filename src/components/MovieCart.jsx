import {IMG_CDN_URL} from '../utils/constant'

const MovieCart = ({posterPath}) => {
  return (
    <div className='w-48'>
      <img src={IMG_CDN_URL+posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCart