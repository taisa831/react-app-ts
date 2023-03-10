import { FaStar } from 'react-icons/fa'

type StarRatingProps = {
  totalStars?: number
  style: object
  selectedStars: number
  onRate: (rate: number) => void
}

const Star = ({ selected = false, onClick = () => {} }) => {
  return <FaStar color={selected ? 'red' : 'blue'} onClick={onClick} />
}

export const StarRating: React.FC<StarRatingProps> = ({
  style = {},
  totalStars = 5,
  selectedStars,
  onRate,
}) => {
  // const [selectedStars, setSelectedStars] = useState(0)
  return (
    <div style={{ padding: 5, ...style }}>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          // onClick={() => setSelectedStars(i + 1)}
          onClick={() => onRate(i + 1)}
        />
      ))}
    </div>
  )
}
