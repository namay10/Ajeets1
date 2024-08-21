import ParticlesBg from "particles-bg";
import bgvideo from "../img/bgvideo.mp4";
import './header.css';
// export const Header = (props) => {
//   return (
//     <header id='header'>
//       <div className='intro'>
      
//         {/* <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} /> */}
//         <div className='overlay'>
//           <div className='container'>
//           <video src={bgvideo} autoPlay muted loop>
//             <source src={bgvideo} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//             <div className='row'>
//               <div className='col-md-8 col-md-offset-2 intro-text'>
//                 <h1>
//                   {props.data ? props.data.title : 'Loading'}
//                   <span></span>
//                 </h1>
//                 <p>{props.data ? props.data.paragraph : 'Loading'}</p>
//                 <a
//                   href='#features'
//                   className='btn btn-custom btn-lg page-scroll'
//                 >
//                   Learn More
//                 </a>{' '}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }
export const Header = (props) => {
  return (
    <div className="header-container">
      <video className="header-video" autoPlay loop muted>
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="header-overlay">
        <h1>We are Ajeets</h1>
        <p>
          Empowering businesses with skilled manpower solutions, our agency delivers customized staffing
          services designed to optimize productivity, streamline operations, and drive success. From sourcing
          top-tier talent to managing staffing logistics, we're dedicated to meeting your workforce requirements
          efficiently and effectively.
        </p>
      </div>
    </div>
  );
};


