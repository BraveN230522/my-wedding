export const Carousel = () => {
  return (
    <div className='container-fluid p-0 mb-5 pb-5' id='home'>
      <div
        id='header-carousel'
        className='carousel slide carousel-fade'
        data-ride='carousel'
        data-interval='2000'
        data-pause='false'
      >
        <div className='carousel-inner'>
          <div className='carousel-item position-relative active' style={{ height: '100vh', minHeight: '400px' }}>
            <img
              alt=''
              className='position-absolute w-100 h-100'
              src='img/carousel-1.jpg'
              style={{ objectFit: 'cover' }}
            />
            <div className='carousel-caption d-flex flex-column align-items-center justify-content-center'>
              <div className='p-3' style={{ maxWidth: '900px', marginTop: '70%' }}>
                <h1 className='display-1 font-secondary text-white mt-n3 mb-md-4'>Dung & Ha</h1>
                <div className='d-inline-block border-top border-bottom border-light py-3 px-4'>
                  <h3 className='text-uppercase font-weight-normal text-white m-0' style={{ letterSpacing: '2px' }}>
                    We're getting married
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item position-relative' style={{ height: '100vh', minHeight: '400px' }}>
            <img
              alt=''
              className='position-absolute w-100 h-100'
              src='img/carousel-2.jpg'
              style={{ objectFit: 'cover' }}
            />
            <div className='carousel-caption d-flex flex-column align-items-center justify-content-center'>
              <div className='p-3 mt-40' style={{ maxWidth: '900px', marginTop: '70%' }}>
                <h1 className='display-1 font-secondary text-white mt-n3 mb-md-4'>Dung & Ha</h1>
                <div className='d-inline-block border-top border-bottom border-light py-3 px-4'>
                  <h3 className='text-uppercase font-weight-normal text-white m-0' style={{ letterSpacing: '2px' }}>
                    We're getting married
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
