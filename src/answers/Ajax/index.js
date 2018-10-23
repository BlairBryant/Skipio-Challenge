import React, { Component } from "react";
import List from "./List";
import axios from 'axios';

/*
You need to load an array of images from this url:
    https://picsum.photos/list

Once you have them loaded, format the array so it has the
four properties listed in EXAMPLE_ARRAY below.

This url responds with a list of 998 of images.
Please only pick the first 20 from the list.
*/
const EXAMPLE_ARRAY = [
  {
    id: 0,
    author: "Alejandro Escamilla",
    authorUrl: "https://unsplash.com/@alejandroescamilla",
    //   ^^^ notice author_url is changed to authorUrl
    postUrl: "https://unsplash.com/photos/yC-Yzbqy7PY"
    // ^^^ notice post_url is changed to postUrl
  },
  {
    id: 1,
    author: "Alejandro Escamilla",
    authorUrl: "https://unsplash.com/@alejandroescamilla",
    postUrl: "https://unsplash.com/photos/LNRyGwIJr5c"
  }
];

/*
Once you have the list loaded, pass your array via props
to the <List> component. Feel free to change this file
however you would like.
*/
export default class Photos extends Component {
  constructor() {
    super()

    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    axios.get('https://picsum.photos/list').then(res => {
      this.setState({photos: res.data.slice(0, 20)})
    })
  }

  render() {
    return (
      <List items={this.state.photos} />
    )
  }
}

/*
Note, Axios is installed for you to use:
    import axios from 'axios';

You may, however, use any library you would like.
*/
