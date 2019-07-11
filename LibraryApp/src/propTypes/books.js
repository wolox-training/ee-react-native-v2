import PropTypes from 'prop-types';

export const bookPropType = PropTypes.shape({
  author: PropTypes.string,
  coverImg: PropTypes.string,
  editor: PropTypes.string,
  genre: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  year: PropTypes.string
});
