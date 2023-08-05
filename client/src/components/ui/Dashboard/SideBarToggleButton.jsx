import PropTypes from 'prop-types';

function SideBarToggleButton({ onClick, isOpen }) {
  return (
    <button
      className={`flex flex-row items-center justify-center fixed left-0 top-20 z-10 m-4 text-white bg-teal-700 hover:bg-teal-800 rounded-lg p-2 text-lg focus:outline-none`}
      onClick={onClick}
    >
      <i className={`fas ${isOpen ? 'fa-chevron-left' : 'fa-chevron-right'}`} />
      <span className="hidden sm:block sm:ml-2">
        {isOpen ? ' Collapse' : ' Expand'}
      </span>
    </button>
  );
}

SideBarToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default SideBarToggleButton;
