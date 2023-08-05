import PropTypes from 'prop-types';

function ProfileCard({ user }) {
  return (
    <div
      key={user._id}
      className="sm:w-1/2 w-full bg-teal-500 flex flex-col justify-center items-center text-justify rounded-lg shadow-lg mb-4 sm:m-2  px-6 py-2 border-2 border-transparent hover:shadow-xl hover:border-teal-700 transition-colors duration-300"
    >
      <h2 className="text-white text-lg font-bold mb-2">{user.name}</h2>

      <div className="text-teal-200 text-sm ">
        <i className="fas fa-envelope mr-2"></i>
        Email: {user.email}
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ProfileCard;
