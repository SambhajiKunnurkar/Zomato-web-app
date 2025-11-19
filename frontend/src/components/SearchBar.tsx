import React from 'react'

export default function SearchBar({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search restaurants, cuisines..."
      className="w-full p-3 rounded border"
    />
  )
}
