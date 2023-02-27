export const Gallery = () => {
  return (
    <div className='container-fluid bg-gallery' id='gallery' style={{ padding: '120px 0', margin: '90px 0' }}>
      <div className='section-title position-relative text-center' style={{ marginBottom: '120px' }}>
        <h6 className='text-uppercase text-primary mb-3' style={{ letterSpacing: '3px' }}>
          Gallery
        </h6>
        <h1 className='font-secondary display-4 text-white'>Our Photo Gallery</h1>
        <i className='far fa-heart text-white'></i>
      </div>
      <div className='owl-carousel gallery-carousel'>
        <div className='gallery-item'>
          <img className='img-fluid w-100' src='img/gallery-1.jpg' alt='' />
          <a href='img/gallery-1.jpg' data-lightbox='gallery'>
            <i className='fa fa-2x fa-plus text-white'></i>
          </a>
        </div>
        <div className='gallery-item'>
          <img className='img-fluid w-100' src='img/gallery-2.jpg' alt='' />
          <a href='img/gallery-2.jpg' data-lightbox='gallery'>
            <i className='fa fa-2x fa-plus text-white'></i>
          </a>
        </div>
        <div className='gallery-item'>
          <img className='img-fluid w-100' src='img/gallery-3.jpg' alt='' />
          <a href='img/gallery-3.jpg' data-lightbox='gallery'>
            <i className='fa fa-2x fa-plus text-white'></i>
          </a>
        </div>
        <div className='gallery-item'>
          <img className='img-fluid w-100' src='img/gallery-4.jpg' alt='' />
          <a href='img/gallery-4.jpg' data-lightbox='gallery'>
            <i className='fa fa-2x fa-plus text-white'></i>
          </a>
        </div>
        <div className='gallery-item'>
          <img className='img-fluid w-100' src='img/gallery-5.jpg' alt='' />
          <a href='img/gallery-5.jpg' data-lightbox='gallery'>
            <i className='fa fa-2x fa-plus text-white'></i>
          </a>
        </div>
        <div className='gallery-item'>
          <img className='img-fluid w-100' src='img/gallery-6.jpg' alt='' />
          <a href='img/gallery-6.jpg' data-lightbox='gallery'>
            <i className='fa fa-2x fa-plus text-white'></i>
          </a>
        </div>
      </div>
    </div>
  )
}
