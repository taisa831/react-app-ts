import { StarRating } from './StarRating'
import { FaTrash } from 'react-icons/fa'

type Color = {
  id: string
  title: string
  color: string
  rating: number
  onRemove: (id: string) => void
  onRate: (id: string, rate: number) => void
}

export const Color: React.FC<Color> = (props) => {
  return (
    <section>
      <h1>{props.id}</h1>
      <button onClick={() => props.onRemove(props.id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: props.color }} />
      <StarRating
        style={{ backgroundColor: 'white' }}
        selectedStars={props.rating}
        onRate={(rating: number) => props.onRate(props.id, rating)}
      />
    </section>
  )
}
