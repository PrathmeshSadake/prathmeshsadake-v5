import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      {/* <hr className='border-slate-200' /> */}

      <div className='footer-container mt-4'>
        <p>
          © 2024 <strong>Prathmesh Sadake</strong>. All rights reserved.
        </p>

        <div className='w-full md:w-fit flex text-center gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <div key={link.name}>
              <Link to={link.link} target='_blank'>
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className='w-6 h-6 object-contain'
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
