import './App.css'
import { About, Carousel, Event, Footer, Gallery, NavBar, RSVP, Story, VideoModal } from './Components'

function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      <VideoModal />
      <RSVP />
      <About />
      <Story />
      <Gallery />
      <Event />
      {/* <FriendFamily /> */}
      <Footer />
      <i className='fa fa-2x fa-angle-down text-white scroll-to-bottom'></i>
      <script src='js/main.js'></script>

      <a href='/#' className='btn btn-lg btn-outline-primary btn-lg-square back-to-top'>
        <i className='fa fa-angle-double-up'></i>
      </a>
    </>
  )
}

export default App
