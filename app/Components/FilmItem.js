import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'


class FilmItem extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <Image style={styles.image} />


        <View style={styles.content_container}>
          <View style={styles.head_container}>
            <Text style={styles.title_text}> Titre du film </Text>
            <Text style={styles.vote_text}> Vote </Text>
          </View>

          <View style={styles.description_container}>
            <Text style={styles.description_text}> Description </Text>
          </View>

          <View style={styles.date_container}>
            <Text style={styles.date_text}> Sortie le 00/00/0000 </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
  head_container: {
    flex: 3,
    flexDirection: 'row',
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex:2,
    paddingRight: 5,
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666',
    flex:1,
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1,
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14,
  }
})

export default FilmItem
