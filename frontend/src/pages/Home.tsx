import React, { useState } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import RestaurantCard from '../components/RestaurantCard'

export default function Home() {
  const [q, setQ] = useState('')

  // SAMPLE static data for Day 1
  const sample = [
    { name: 'Spice Villa', cuisine: ['North Indian'], rating: 4.3 },
    { name: 'Pizza Lane', cuisine: ['Italian'], rating: 4.0 },
  ]

  const filtered = sample.filter((r) =>
    r.name.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div>
      <Header />

      <div className="container mx-auto p-4">
        <SearchBar value={q} onChange={setQ} />

        <div className="grid grid-cols-2 gap-4 mt-4">
          {filtered.map((r) => (
            <RestaurantCard
              key={r.name}
              name={r.name}
              cuisine={r.cuisine}
              rating={r.rating}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
