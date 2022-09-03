const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-neutral text-primary-content">
      <p>Copyright &copy; {footerYear} All rights reserved</p>
    </footer>
  );
};

export default Footer;
