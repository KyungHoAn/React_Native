import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import SearchInput from '../components/SearchInput'
import SearchContent from '../components/SearchContent'

const Search = () => {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        backgroundColor: 'white',
        position: 'relative'
      }}
    >
      <ScrollView>
        {/* searchInput */}
        <SearchInput />
        {/* searchContent */}
        <SearchContent />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Search