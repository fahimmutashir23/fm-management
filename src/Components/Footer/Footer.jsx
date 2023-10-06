import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="bg-bg_nav_footer"
    style={{
        backgroundImage: "",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <footer className="footer p-10 max-w-6xl mx-auto text-primary_color">
        <aside>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <Link to="" className="link link-hover">Branding</Link>
          <Link to="" className="link link-hover">Design</Link>
          <Link to="" className="link link-hover">Marketing</Link>
          <Link to="" className="link link-hover">Advertisement</Link>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <Link to="" className="link link-hover">About us</Link>
          <Link to="" className="link link-hover">Contact</Link>
          <Link to="" className="link link-hover">Jobs</Link>
          <Link to="" className="link link-hover">Press kit</Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link to="" className="link link-hover">Terms of use</Link>
          <Link to="" className="link link-hover">Privacy policy</Link>
          <Link to="" className="link link-hover">Cookie policy</Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
