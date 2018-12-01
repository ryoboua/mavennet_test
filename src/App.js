import React, { Component } from "react"
import "./App.css"
import client from "./client"
import PhotoCard from "./PhotoCard"
import { Button } from "grommet"

class App extends Component {
  state = {
    photoList: [],
    lastFetchedId: 0
  }

  componentDidMount() {
    this.loadPhotos()
  }

  updateLastFetchedId = () => {
    const { photoList } = this.state

    const lastPhoto = photoList[photoList.length - 1]

    this.setState({ lastFetchedId: lastPhoto.id })
  }

  loadPhotos = () => {
    const { lastFetchedId } = this.state
    client.fetchPhotos(lastFetchedId).then(res =>
      this.setState(
        {
          photoList: [...this.state.photoList, ...res]
        },
        () => this.updateLastFetchedId()
      )
    )
  }

  render() {
    const { photoList } = this.state
    return (
      <div className="App">
        {photoList.length > 0 &&
          photoList.map((item, index) => (
            <PhotoCard key={index} photo={item} />
          ))}
        <div style={{ width: "100%", margin: "1em" }}>
          <Button
            label="Load more pictures"
            onClick={() => this.loadPhotos()}
          />
        </div>
      </div>
    )
  }
}

export default App
