import chatGroup from './images/image-header-desktop.jpg'
import NumberArea from './Components/numberArea';

function App() {
  return (
    // Main 
    <div className=" w-screen h-screen bg-bgColor flex items-center justify-center ">
      {/* Card */}
      <div className="bg-bgCard flex flex-col md:flex-row xl:flex-row rounded-xl">

        {/* Text */}
        <div className="mt-28 ml-10 mr-10 md:m-10 xl:m-10 ">
          <h1 className="text-white text-5xl mb-10 md:mb-10 xl:mb-10 ">Get <span className="text-text">insights</span> that help <br/> your business grow.</h1>
          <h2 className="text-gray-500 text-lg">Discover the benefits of data analytics and make <br/>better decisions regarding revenue, customer <br/>experience, and overall efficiency.</h2>

          <NumberArea/>

        </div>
        {/* Image */}
        <div className="float-right bg-text rounded-br-xl rounded-tr-xl">
          <img src={chatGroup} alt="test" className=" opacity-60 object-cover rounded-tr-xl rounded-br-xl"></img>

        </div>
      </div>
    </div>
  );
}

export default App;
