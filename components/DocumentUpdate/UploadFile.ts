import axios from "axios";

export const uploadFile = (
    uploadForm,
    callback = ({ type, payload }) => {}
) => {
    // target server url
    const url = "http://localhost:5010/api/appRoute/upload";

    // Files array containing single/multiple files to upload
    let files = uploadForm.files;

    // Initialising the formdata interface for better XMLHttpRequest requests
    let formdata = new FormData();

    // appending data to the formdata object
    files.map((file) => {
        formdata.append("files", file);
    });

    // Configuration object to return payload information
    const configuration = {
        onUploadProgress: (event) => {
            // console.log("upload", event);
            return callback({
                type: "onUploadProgress",
                payload: event,
            });
        },
    };

    // Send a post request with formdata
    axios
        .post(url, formdata, configuration)
        .then((res) => {
            return callback({
                type: "success",
                payload: res.data,
            });
        })
        .catch((err) => {
            return callback({
                type: "failure",
                payload: err,
            });
        });
};
