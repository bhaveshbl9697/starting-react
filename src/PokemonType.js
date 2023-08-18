import PropTypes from "prop-types";

const PokemonType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
    japanese: PropTypes.string.isRequired,
    chinese: PropTypes.string.isRequired,
    french: PropTypes.string.isRequired,
  }),
  type: PropTypes.arrayOf(PropTypes.string.isRequired),
  base: PropTypes.shape({
    HP: PropTypes.number,
    Attack: PropTypes.number,
    Defense: PropTypes.number,
    "Sp. Attack": PropTypes.number,
    "Sp. Defense": PropTypes.number,
    Speed: PropTypes.number,
  }),
});

export default PokemonType;
