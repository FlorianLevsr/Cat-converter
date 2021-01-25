import PropTypes from "prop-types";
import './style.scss';

const toggler = ({ open, toggle }) => {
    const cssClassNames = open ? 'toggler toggler--open' : 'toggler';
    return (
        <button className={cssClassNames} type="button" onClick={toggle}>=</button>
    )
};

toggler.propTypes = {
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
};

export default toggler;