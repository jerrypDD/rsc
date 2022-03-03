import React, { useState, useTransition } from 'react'
import { unstable_useRefreshRoot as useRefreshRoot } from 'next/streaming'

function SearchInput() {
  const [search, setSearch] = useState('')
  const [isSearching, startSearching] = useTransition({ timeoutMs: 200 })
  const refresh = useRefreshRoot()

  return (
    <input
      onChange={e => {
        const newText = e.target.value
        setSearch(newText)
        refresh({ searchText: newText })
        startSearching(() => {})
      }}
    />
  )
}

export default SearchInput
