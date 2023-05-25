import { Component } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default class DetailMovie extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="detail grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-1">
          <Card
            imageSrc="https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_7259_1024x1024@2x.jpg?v=1640349274"
            showDescription={true}
            showButton={false}
          />
        </div>
      </div>
    );
  }
}
