import React, { Component} from 'react'
import { Platform, StyleSheet, TextInput, Button, Text, View, FlatList, ActivityIndicator} from 'react-native';
import { getFilmsFromApiWithSearchText} from '../services/TMDBApi'
import FilmItem from './FilmItem'
type Props = {};
class Search extends Component<Props> {
  constructor(props) {
    super(props)
    this.searchedText = ""
    this.page = 0
    this.totalPages = 0
    this.state = {
      films: [],
      isLoading: false,
    }
  }
  _loadFilms() {
    this.setState({isLoading : true})
    getFilmsFromApiWithSearchText(this.searchedText, this.page+1).then((data) => {
      this.page = data.page
      this.totalPages = data.total_pages
      console.log('this.page' , this.page , this.totalPages, this.totalPages)
      this.setState({
        films : [...this.state.films, ...data.results],
        isLoading : false,
      })
    })
    .catch((error) => console.log(error))

  }
  _searchTextInputChanged(text) {
    this.searchedText = text
  }
  _displayLoading() {
    if(this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    }
  }
  _searchFilms() {
    this.page = 0
    this.totalPages = 0
    this.setState({
      films: [],
    }, () => {this._loadFilms()})
  }

  _displayDetailForFilm = (idFilm) => {
    console.log('idFilm', idFilm)
    this.props.navigation.navigate("FilmDetail", {idFilm: idFilm})
  }
  render() {
    console.log('props search : ', this.props)
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.text_input} placeholder='Title of movie' onChangeText={(text) => this._searchTextInputChanged(text)} onSubmitEditing={() => this._searchFilms()}/>
        <Button title='search' onPress={() => this._searchFilms()}/>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm}/>}
          onEndReachedThreshold={0.5}
          onEndReached={()=> {
            if(this.page < this.totalPages) {
              this._loadFilms()
            }
          }}
        />
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,
  },
  text_input: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
export default Search
