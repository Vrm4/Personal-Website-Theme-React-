import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faStar ,faXmark ,faBars ,faBriefcase} from '@fortawesome/free-solid-svg-icons'
import ReactTypingEffect from 'react-typing-effect';
function App() {

  const ClickCross = () =>{
    document.getElementById('mobile-list').style.display = 'none'
  }
  const openList = () =>{
    document.getElementById('mobile-list').style.display = 'block'
  }
  // Icons
  const ok = <FontAwesomeIcon icon={faCircleCheck} className='CircleIcon' />
  const star = <FontAwesomeIcon icon={faStar} className='StartIcon' />
  const cross = <FontAwesomeIcon icon={faXmark} className='crossIcon' onClick={ClickCross} />
  const bar = <FontAwesomeIcon icon={faBars} className='barsIcon' onClick={openList} />
  const brief = <FontAwesomeIcon icon={faBriefcase} className='briefIcon' />
  return (
    <div className="main">
      <div id='header'>
        <div id='header-img'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'/>
        </div>
        <div>
          <ul id='header_ul'>
            <li><a href='#mid-4'>Projects</a></li>
            <li><a href='#mid-3'>What I Do</a></li>
            <li><a href='#mid-2'>About Me</a></li>
            <li><a href='#contact_title'>Contact</a></li>
          </ul>
        </div>
        <div id='header-icon'>
        {bar}
        <a href='https://github.com/Vrm4' target={'_blank'}><img  src='https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-128.png'/></a>
        </div>
      </div>
      <div id='mid'>
        <div id='mid-text'>
          <h1>Welcome To Home Of <ReactTypingEffect text={"Vrm"}
          speed={100} 
          typingDelay={500} 
          eraseDelay={1500}
          eraseSpeed={100}
          /></h1>
          <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
          <div id='text_icons'>
            <img src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'/>
            <img src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-512.png'/>
            <img src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-128.png'/>
            <img src='https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-128.png'/>
          </div>
        </div>
      </div>
      <div id='mid-2'>
          <div id='mid-2-wrapper'>
          <div id='about-text'>
            <h1>ABOUT ME</h1>
            <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
            <button className='hire-button'>Hire {brief}</button>
          </div>
          <div id='about-img'>
            <img src='https://www.blueajans.com.tr/view/uploads/blog/614e2527ef9d1163251127134.jpg' />
          </div>
          </div>
      </div>
      <h1 className='title'>What I Do</h1>
      <div id='mid-3'>
        <div id='mid-3-wrapper'>
          <div id='mid-3-web-design'>
          <div id='mid-3-img'>
              <img src='https://png.pngtree.com/png-vector/20190611/ourmid/pngtree-web-development-illustration-modern-can-be-used-for-landing-pages-web-png-image_1496200.jpg'/>
            </div>
            <div id='mid-3-text'>
              <h2>Web Design</h2>
              <p>
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              </p>
              <button className='hire-button'>Hire {brief}</button>
            </div>
          </div>
          <div id='mid-3-mobile-design'>

          <img id='picture-2' src='https://i.pinimg.com/474x/39/10/14/39101467c76287d62bcfea986495372f.jpg' />
          <div id='mid-3-mobile-design-text'>
            <h2>Mobile Design</h2>
              <p>
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              </p>
              <button className='hire-button'>Hire {brief}</button>
            </div>
            <img id='picture-1' src='https://i.pinimg.com/474x/39/10/14/39101467c76287d62bcfea986495372f.jpg' />
  
          </div>
          <div id='mid-3-cyberSecurity-design'>
              <img src='https://img.freepik.com/free-vector/cyber-security-risk-management-abstract-concept-illustration-cyber-security-report-analysis-risk-mitigation-management-protection-strategy-identify-digital-threat_335657-874.jpg?w=360'/>
              <div id='mid-3-cyberSecurity-design-text'>
              <h2>Cyber Security</h2>
              <p>
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              </p>
              <button className='hire-button'>Hire {brief}</button>
              </div>
          </div>
        </div>
        
      </div>
      <div id='mid-4'>
        <h1 className='title'>Projects</h1>
        <div id='mid-4-wrapper'>
          <div id='mid-4-1'>
            <img src='https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?w=2000'/>
            <div id='mid-4-1-text'>
              <h2>While I Create A WebSite</h2>
              <ul>
                <li>{ok} Dynamic Web Sites</li>
                <li>{ok} Clean Code</li>
                <li>{ok} Admin Panel</li>
                <li>{ok} Fast Delivery</li>
              </ul>
              <button className='hire-button'>Hire {brief}</button>
              </div>          
          </div>
          <div id='mid-4-2'>
              <div className='projects'>
                <div className='project-img'>
                <img src='https://cdn.dribbble.com/users/1726280/screenshots/10556530/media/80b97e4b0a802968eec4c166b35ebaa1.jpg?compress=1&resize=400x300&vertical=top'/>
                </div>
                <h4>Web Site</h4>
              </div>
              <div className='projects'>
                <div className='project-img'>
                <img src='https://media.istockphoto.com/vectors/business-brochure-design-template-and-page-layout-for-company-profile-vector-id690309792'/>
                </div>
                <h4>Web Site</h4>
              </div>
              <div className='projects'>
                <div className='project-img'>
                <img src='https://img.freepik.com/free-psd/american-football-landing-page_23-2148818913.jpg?w=2000'/>
                </div>
                <h4>Web Site</h4>
              </div>
              
      
          </div>
        </div>
      </div>
      <h1 className='title' id='contact_title'>Contact</h1>
      <div id='contact'>
        <div id='contact-wrapper'>
        <form>
          <div className='nameSurname-input'>
          <input type="text" name="name" placeholder='Name Surname'/> 
          <input type="text" name="surname" placeholder='E-Mail' />
          </div>
          <input type="tel" name="phone" placeholder='Phone' />
          <textarea placeholder='Text'></textarea>
          <button className='hire-button' style={{display :'block' , margin:'auto'}}>Submit {brief}</button>
        </form>
        </div>
      </div>
      <div id='footer'>
        <h5>Copyright © 2022 Vrm Platforms, Inc.</h5>
      </div>
      <div id='mobile-list'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'/>
          {cross}
          <ul>
          <li><a onClick={ClickCross} href='#mid-4'>Projects</a></li>
          <li><a onClick={ClickCross} href='#mid-3'>What I Do</a></li>
          <li><a onClick={ClickCross} href='#mid-2-wrapper'>About Me</a></li>
          <li><a onClick={ClickCross} href='#contact_title'>Contact</a></li>
          <li><a onClick={ClickCross} href='https://github.com/Vrm4' target={'_blank'}>Github</a></li>
          </ul>
      </div>
    </div>
  );
}
export default App;
