import { Color } from './Color'

type ColorProps = {
  colors: {
    id: string
    title: string
    color: string
    rating: number
  }[]
  onRemoveColor: (id: string) => void
  onRate: (id: string, rate: number) => void
}

export const ColorList: React.FC<ColorProps> = ({
  colors,
  onRemoveColor,
  onRate,
}) => {
  if (!colors.length) return <div>No colors Listed.</div>
  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRate}
        />
      ))}
    </div>
  )
}
