import "./Footer.css";

// Hooks
import { useRef } from "react";

const Footer = () => {
  const containerRef = useRef(null);

  return (
    <footer data-scroll-container className="footer" ref={containerRef}>
      <h2 className="footer__heading">
        let us take you further than you’ve ever been.
      </h2>
      <div className="footer__contact">
        <p className="footer__text">we would love to hear from you.</p>
        <h2 className="footer__mail"> hello@onveiv.com</h2>
        <div className="footer__info">
          <div className="footer__socials">
            <p className="footer__text">socials</p>
            <ul className="footer__socialsList">
              <li>
                <a href="">instagram</a>
              </li>
              <li>
                <a href="">facebook</a>
              </li>
              <li>
                <a href="">linkedin</a>
              </li>
              <li>
                <a href="">behance</a>
              </li>
              <li>
                <a href="">medium</a>
              </li>
            </ul>
          </div>
          <div className="footer__address">
            <div className="footer__text">our office</div>
            <h4>
              jafar jabbarli st. 44 <br /> caspian plaza <br /> baku,
              azerbaijan.
            </h4>
          </div>
          <div className="footer__tel">
            <p className="footer__text">phone</p>
            <h4>+994 (51) 346 65 54</h4>
          </div>
        </div>
      </div>
      <p className="footer__copyright">© 2022 Onveiv. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
