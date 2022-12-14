import { RiHeartLine, RiHeartFill } from 'react-icons/ri'
import { favoriteBook } from '../../../utils/lib/client/book-functions'

//TODO: Fix the button to change hearts when favorited when clicked
// it's obviously something with useEffect but i don't see it just yet

interface HeartIconProps {
  id: number
  favorite: boolean
}

export const HeartIcon: React.FC<HeartIconProps> = ({ id, favorite }) => {
  const handleClick = async () => {
    favoriteBook(id)
  }

  return (
    <button onClick={handleClick}>
      {favorite ? <RiHeartFill /> : <RiHeartLine />}
    </button>
  )
}
