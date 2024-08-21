import qatar from '../img/qatar.jpg';
import uae from '../img/uae.jpg';
import saudi from '../img/saudi.png'
import kuwait from '../img/kuwait.jpg'
import oman from '../img/oman.png'
import bahrain from '../img/bahrain.jpeg'
export const Features = () => {
  const data = [
    {
      title: 'Qatar',
      icon: qatar,
      text: 'We serve in Qatar, offering a wide range of services to meet your needs.',
    },
    {
      title: 'UAE',
      icon: uae,
      text: 'Our services are also available in the United Arab Emirates.',
    },
    {
      title: 'Saudi Arabia',
      icon: saudi,
      text: 'We provide top-notch services in Saudi Arabia.',
    },
    {
      title: 'Oman',
      icon: oman,
      text: 'You can find our services in Oman as well.',
    },
    {
      title: 'Kuwait',
      icon: kuwait,
      text: 'We are proud to offer our services in Kuwait.',
    },
    {
      title: 'Bahrain',
      icon: bahrain,
      text: 'Our services extend to Bahrain too.',
    },
  ];
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Countries We Serve At</h2>
        </div>
        <div className='row'>
        {/* <div className='testimonial-image'>
               {' '}
               <img src={qatar} alt='' />
          </div> */}
          {data
            ? data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-lg-2'>
                  <div className='testimonial-image'>
                      {' '}
                      <img src={d.icon} alt='' />
                    </div>
                  {/* {' '}
                    <img src={d.icon} alt='' /> */}
                  {/* <i className={d.icon}></i> */}
                  
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
