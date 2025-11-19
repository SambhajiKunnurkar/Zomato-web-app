type Props = { 
  name: string
  cuisine: string[]
  rating: number
}

export default function RestaurantCard({ name, cuisine, rating }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="h-36 bg-gray-200 mb-3 rounded" />

      <h3 className="font-semibold text-lg">{name}</h3>

      <p className="text-sm text-gray-600">
        {cuisine.join(', ')}
      </p>

      <div className="mt-2 font-medium">
        ⭐ {rating}
      </div>
    </div>
  )
}

