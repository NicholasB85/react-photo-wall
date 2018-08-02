import React, { Component } from 'react';
import './App.css';

// This URL can be combined with an photo id to fetch an photo.
const PHOTO_URL = "https://picsum.photos/200?photo=";
// This URL can be used to get an array of objects that contain information
// about various photos.
const PHOTO_LIST_URL = "https://picsum.photos/list";

class App extends Component {
  
  state = { photos: [] }

  

  componentDidMount() {
    fetch (PHOTO_LIST_URL)
      .then(res => res.json())
        .then(photoArray => this.setState({photos: photoArray}));
  }
  render() {
    const photos = this.state.photos;
    return (
      <React.Fragment>
        <header>
          <h1>Photo Wall</h1>
        </header>
        <div className="collage">
            {photos.map( photo => 
                <img alt={photo.filename}
                     key={photo.id}
                     src={PHOTO_URL + photo.id}
                />
            )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
