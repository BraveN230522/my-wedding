export const NavBar = () => {
  return (
    <nav className='navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5'>
      <a href='index.html' className='navbar-brand d-block d-lg-none'>
        <h1 className='font-secondary text-white mb-n2'>
          Jack <span className='text-primary'>&</span> Rose
        </h1>
      </a>
      <button type='button' className='navbar-toggler' data-toggle='collapse' data-target='#navbarCollapse'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse justify-content-between' id='navbarCollapse'>
        <div className='navbar-nav ml-auto py-0'>
          <a href='#home' className='nav-item nav-link active'>
            Home
          </a>
          <a href='#rsvp' className='nav-item nav-link'>
            RSVP
          </a>
          <a href='#about' className='nav-item nav-link'>
            About
          </a>
          <a href='#story' className='nav-item nav-link'>
            Story
          </a>
        </div>
        <a href='index.html' className='navbar-brand mx-5 d-none d-lg-block'>
          <h1 className='font-secondary text-white mb-n2'>
            Dung <span className='text-primary'>&</span> Ha
          </h1>
        </a>
        <div className='navbar-nav mr-auto py-0'>
          <a href='#gallery' className='nav-item nav-link'>
            Gallery
          </a>
          <a href='#event' className='nav-item nav-link'>
            Event
          </a>
          <a href='#family' className='nav-item nav-link'>
            Family
          </a>
          <a href='#contact' className='nav-item nav-link'>
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
