function Footer() {
  return (
    <footer className=" bg-violet-500 py-6">
      <div className="flex flex-row justify-center items-center container mx-auto text-violet-200 text-center">
        <p>
          &copy; {new Date().getFullYear()} CardGenius. All rights reserved.
          Created with ♥ by{' '}
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-violet-900"
          >
            Muhammad Saad
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
