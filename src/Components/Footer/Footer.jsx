import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="bg-bg_nav_footer py-11"
    style={{
        backgroundImage: "",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <footer className="flex max-w-6xl mx-auto text-primary_color">
        <div className="flex flex-col items-center md:flex-row justify-evenly footer">
            <aside>
            <div>
                <p className="text-primary_color text-3xl font-extrabold -mb-2 font-roboto">FM</p>
                <p className="text-card font-roboto text-lg">Management</p>
                </div>
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
        </div>
       <div className="flex flex-col items-center md:flex-row footer md:justify-evenly">
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
       </div>
      </footer>
    </div>
  );
};

export default Footer;
