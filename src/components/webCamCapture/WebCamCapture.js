import React from "react";
import Webcam from "react-webcam";
import { Button } from "react-bootstrap";

function WebCamCapture(props) {
  const webcamRefs = React.useRef([]);
  const [devices, setDevices] = React.useState([]);

  const handleCapture = React.useCallback(() => {
    for (let element of webcamRefs.current) {
      const screenshot = element.getScreenshot(); // base64 encoded image string

      if (screenshot) {
        props.onCapture(screenshot);
        break;
      }
    }
  }, [webcamRefs]);

  const handleDevices = React.useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  React.useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);
  return (
    <>
      <div className="webcam">
        {devices.map((device, index) => {
          return (
            <div key={index}>
              <Webcam
                videoConstraints={{ deviceId: device.deviceId }}
                audio={false}
                height={200}
                ref={(element) => (webcamRefs.current[index] = element)}
                screenshotFormat="image/png"
                width={200}
              />
              {device.label || `Device ${index + 1}`}
              <br />
            </div>
          );
        })}
        <div>
          <Button onClick={handleCapture}>Capture Photo</Button>
        </div>
      </div>
    </>
  );
}

export default WebCamCapture;
