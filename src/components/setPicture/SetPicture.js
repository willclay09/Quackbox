import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import "./SetPicture.css";
import DataService from "../../dataService";
import { Button, Form } from "react-bootstrap";
import WebCamCapture from "../webCamCapture/WebCamCapture";

class SetPicture extends React.Component {
  constructor(props) {
    super(props);

    const timeStamp = Date.now();
    this.client = new DataService();
    this.state = {
      picture: `https://socialapp-api.herokuapp.com/users/${this.client.getUserName()}/picture?t=${timeStamp}`,
      formData: null,
      url: `https://socialapp-api.herokuapp.com/`,
    };

    console.log(this.state.picture);
  }

  componentDidMount() {
    this.client.getUserPicture(this.client.getUserName()).then((result) => {
      this.setState({
        picture: result.config.url,
      });
    });
  }

  updatePicture() {
    const timeStamp = Date.now();
    const url = `https://socialapp-api.herokuapp.com/users/${this.client.getUserName()}/picture?t=${timeStamp}`;
    this.setState({ picture: url });
  }

  addFileToFormDataAndSend = (file) => {
    const formData = new FormData();
    formData.append("picture", file);

    this.setState({ formData }, this.handlePicture);
  };

  addEncodedImageFile = (encodedImage) => {
    const file = dataURItoBlob(encodedImage);
    this.addFileToFormDataAndSend(file);
    console.log(file);
  };

  addFileToForm = (event) => {
    const file = event.target.files[0];
    this.addFileToFormDataAndSend(file);
  };

  addFileToImage = (e) => {
    const file = dataURItoBlob();
    this.addFileToFormDataAndSend(file);
  };

  setFallbackImage = (e) => {
    e.target.src = "images/rubber-duck.jpg";
  };

  handlePicture = (e) => {
    if (this.state.formData === null) return;
    this.client.userPicture(this.state.formData).then((response) => {
      // console.log(response);
      if (response.data.statusCode === 200 && this.state.submitted) {
      }

      this.updatePicture();
    });
  };

  render() {
    // const imageAsOctetStream = this.state.picture.replace(
    //   /^data:image\/[^;]+/,
    //   "data:application/octet-stream"
    // );
    console.log(this.state.picture);
    return (
      <div className="PictureForm">
        <Form id="picture-form">
          <Form.Label htmlFor="picture">
            <h3>Choose a Profile Picture</h3>
          </Form.Label>
          <Form.File
            type="file"
            accept="image/jpeg, image/gif, image/png"
            capture="user"
            name="picture"
            onChange={this.addFileToForm}
          />
          <div className="image-preview">
            <img
              className="Image"
              alt="user"
              src={this.state.picture}
              onError={this.setFallbackImage}
            />

            {/* <a
              href={imageAsOctetStream}
              className="download-button"
              target="_blank"
              download="profile_photo.png"
            >
              📥
            </a> */}
          </div>
          <WebCamCapture
            variant="primary"
            onCapture={this.addEncodedImageFile}
          />
        </Form>
        <Button
          variant="secondary"
          className="FallBack"
          onClick={this.addFileToImage}
        >
          Fall Back Image
        </Button>
      </div>
    );
  }
}

function dataURItoBlob(dataURI) {
  //from:https://stackoverflow.com/questions/6850276/how-to-convert-dataurl-to-file-object-in-javascript/7261048#7261048
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(",")[1]);

  // separate out the mime component
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], { type: mimeString });
}

export default userIsAuthenticated(SetPicture);
