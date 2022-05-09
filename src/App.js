
import './App.css';
import image from "./images/imageInSrc.jpg"

function App() {
  return (
    <div >
      <div myStyle='myStyle'>

<h1 className='title red'>Your name here</h1>

<img src={image} alt="" />

<img src="/imageInPublic.jpg" alt="" />

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
