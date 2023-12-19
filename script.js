const videoInput = document.getElementById("video-url");
const downloadButton = document.getElementById("download-button");
const thumbnailBox = document.getElementById("thumbnail-box");

videoInput.onkeyup = () =>
{
    let imageURL = videoInput.value;

    downloadButton.disabled = false;
    downloadButton.classList.add("active");
    thumbnailBox.classList.add("active");
    thumbnailBox.querySelector(".thumbnail").src = "";

    if (imageURL.indexOf("https://www.youtube.com/watch?v=") != -1)
    {
        let videoID = imageURL.split("v=")[ 1 ].substring(0, 11);
        let ytThumbURL = `https://img.youtube.com/vi/${ videoID }/maxresdefault.jpg`;
        console.log(ytThumbURL);
        downloadButton.href = ytThumbURL;
        downloadButton.classList.add("active");
        thumbnailBox.classList.add("active");
        thumbnailBox.querySelector(".thumbnail").src = "";
        thumbnailBox.querySelector(".thumbnail").src = ytThumbURL;
    }
}

const isValidURL = (url) =>
{
    let urlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return urlRegex.test(url);
}