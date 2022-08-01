function Footer() {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-3 border-t border-t-slate-800 mt-20 gap-4 py-10 text-center lg:text-left">
      <div className="mx-auto mb-4">
        <img
          src={`/img/logo.png`}
          alt="Image logo"
          className="w-full max-h-32 object-cover"
        />
      </div>
      <div className="mx-auto mb-4">
        <h4 className="font-bold text-xl mb-2">Nuestros Servicios</h4>
        <ul className="text-slate-500">
          <a href="#">
            <li>Hoteles</li>
          </a>
          <a href="#">
            <li>Autos de renta</li>
          </a>
        </ul>
      </div>
      <div className="mx-auto mb-4">
        <h4 className="font-bold text-xl mb-2">Cont&aacute;ctenos</h4>
        <ul className="text-slate-500">
          <a href="#">
            <li className="inline-block">
              <img
                src="/img/email.png"
                alt="Email icon"
                className="w-12 h-12"
              />
            </li>
          </a>
          <a href="#">
            <li className="inline-block ml-4">
              <img src="/img/fb.png" alt="Email icon" className="w-12 h-12" />
            </li>
          </a>
          <a href="#">
            <li className="inline-block ml-4">
              <img
                src="/img/insta.png"
                alt="Email icon"
                className="w-12 h-12"
              />
            </li>
          </a>
          <a href="#">
            <li className="inline-block ml-4">
              <img src="/img/tw.png" alt="Email icon" className="w-12 h-12" />
            </li>
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
