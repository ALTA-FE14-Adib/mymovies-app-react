import { Component } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default class NowPlayingMovies extends Component {
  render() {
    return (
      <div className="overflow-x-hidden">
        <Navbar />
        <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3">
          <Card imageSrc="https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_7259_1024x1024@2x.jpg?v=1640349274" />
          <Card imageSrc="https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_7259_1024x1024@2x.jpg?v=1640349274" />
          <Card imageSrc="https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_7259_1024x1024@2x.jpg?v=1640349274" />
          <Card imageSrc="https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_7259_1024x1024@2x.jpg?v=1640349274" />
          <Card imageSrc="https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_7259_1024x1024@2x.jpg?v=1640349274" />
          <Card imageSrc="https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_7259_1024x1024@2x.jpg?v=1640349274" />
        </div>
      </div>
    );
  }
}
