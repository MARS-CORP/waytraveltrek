function NavList (props) {
  return (
    <ul className="md:mt-6 mr-4 max-w-lg text-lg font-medium text-gray-700 cursor-pointer">
      {props.children}
    </ul>
  );
}

export default NavList;
