
import ai from '../../Assets/brainwheadphone-.png';
import './header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  return(
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Use MHM And Check Your Mental Health</h1>
      <p>Your mental well-being matters! If you're feeling overwhelmed, stressed, or not quite like yourself, it's time to give your mental health the attention it deserves.Remember, taking care of your mental well-being is just as important as your physical health, so don't hesitate to reach out for assistance when needed.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        
        <button type="button" onClick={() => navigate('/stressometer')}>Get Started</button>
      </div>

      
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
  );
};

export default Header;