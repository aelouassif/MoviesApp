import React, { Component} from 'react'
import { Platform, StyleSheet, TextInput, Button, Text, View, FlatList} from 'react-native';
import { getFilmsFromApiWithSearchText} from '../services/TMDBApi'
import FilmItem from './FilmItem'
type Props = {};
class Search extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = { films: [] }
  }
  _loadFilms() {
    getFilmsFromApiWithSearchText("test").then((data) => {
      this.setState({films : data.results})
      console.log('-------------------+++++++++++++++++------------------')
      console.log(data.results)
    })
  }
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.text_input} placeholder='Title of movie'/>
        <Button title='search' onPress={() => this._loadFilms()}/>
        <FilmItem/>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item) => <FilmItem/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    marginTop: 20,
  },
  text_input: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
  },
})
export default Search
