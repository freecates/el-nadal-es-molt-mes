// Import react, react-dom & dom-to-image-more
import domtoimage from 'dom-to-image-more';
import * as React from 'react';
import MainLayout from '../components/MainLayout';
// Import components
import PostalsContent from '../components/PostalsContent';
import PostalsForm from '../components/PostalsForm';
import PostalsResult from '../components/PostalsResult';
import BasicPageStyles from '../components/styles/BasicPageStyles';
import PostalsStyles from '../components/styles/PostalsStyles';
import Title from '../components/Title';

function Postal() {
  // Create refs
  let contentContainerRef = React.useRef(null);
  let resultContainerRef = React.useRef(null);
  // Create useState hooks
  const [images, setImages] = React.useState([]);
  const [activeImage, setActiveImage] = React.useState('');
  const [textTop, setTextTop] = React.useState('');
  const [textBottom, setTextBottom] = React.useState('');
  const [isMemeGenerated, setIsMemeGenerated] = React.useState(false);
  async function fetchImage() {
    // Get the memes
    const imgData = await fetch(
      'https://nadalesmoltmesdata.now.sh/postals-nadal.json'
    )
      .then(res => res.json())
      .catch(err => console.error(err));
    const { memes } = await imgData.data;
    // Update images state
    await setImages(memes);
    // Update activeImage state
    await setActiveImage(memes[0].url);
  }
  // Handle input elements
  function handleInputChange(event) {
    if (event.target.name === 'text-top') {
      // Update textTop state
      setTextTop(event.target.value);
    } else {
      // Update textBottom state
      setTextBottom(event.target.value);
    }
  }
  // Choose random images from images fetched from api.imgflip.com
  function handleImageChange() {
    // Choose random image
    const image = images[Math.floor(Math.random() * images.length)];
    // Update activeImage state
    setActiveImage(image.url);
  }
  // Handle image upload via file input
  function handleImageInputChange(event) {
    // Update activeImage state
    setActiveImage(window.URL.createObjectURL(event.target.files[0]));
  }
  // Handle meme generation
  function handleMemeGeneration() {
    // Remove any existing images
    if (resultContainerRef.current.childNodes.length > 0) {
      resultContainerRef.current.removeChild(
        resultContainerRef.current.childNodes[0]
      );
    }
    // Generate meme image from the content of 'content' div
    domtoimage
      .toPng(contentContainerRef.current, { quality: 1 })
      .then(dataUrl => {
        // Create new image
        const img = new Image();
        const link = document.createElement('a');
        link.download = 'postal-de-nadal-es-molt-mes.jpeg';
        link.title = "Descarrega't la Postal de Nadal És Molt Més";
        link.href = dataUrl;
        const icon = `<img src='/static/download-nadal-es-molt-mes.png'/>`;
        console.log(icon);
        link.innerHTML = `Descarrega ${icon}`;

        // Use url of the generated image as src
        img.src = dataUrl;
        // Append new image to DOM
        //resultContainerRef.current.appendChild(img)
        resultContainerRef.current.appendChild(link);
        // Update state for isMemeGenerated
        setIsMemeGenerated(true);
      });
  }
  // Handle resetting the meme generator/removing existing pictures
  function handleMemeReset() {
    // Remove existing child node inside result container (generated meme image)
    resultContainerRef.current.removeChild(
      resultContainerRef.current.childNodes[0]
    );
    // Update state for isMemeGenerated
    setIsMemeGenerated(false);
  }
  // Fetch images from https://api.imgflip.com/get_memes when app mounts
  React.useEffect(() => {
    // Call fetchImage method
    fetchImage();
  }, []);
  return (
    <MainLayout mainlayout>
      <BasicPageStyles>
        <div className='hero no--no-height'>
          <Title title={'Envia una postal'} />
          <PostalsStyles>
            <div className='row sm-12 md-6 xl-2-3'>
              <div>
                <PostalsContent
                  activeImage={activeImage}
                  contentContainerRef={contentContainerRef}
                  textBottom={textBottom}
                  textTop={textTop}
                />
              </div>
              <div>
                <PostalsForm
                  textTop={textTop}
                  textBottom={textBottom}
                  handleImageInputChange={handleImageInputChange}
                  handleInputChange={handleInputChange}
                  handleImageChange={handleImageChange}
                  handleMemeGeneration={handleMemeGeneration}
                  handleMemeReset={handleMemeReset}
                  isMemeGenerated={isMemeGenerated}
                />
                <PostalsResult resultContainerRef={resultContainerRef} />
              </div>
            </div>
          </PostalsStyles>
        </div>
      </BasicPageStyles>
    </MainLayout>
  );
}

export default Postal;
