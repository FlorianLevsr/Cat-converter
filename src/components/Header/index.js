import PropTypes from "prop-types";
import './style.scss';

const Header = (props) => {

    return (

        <div className="header">

            <h1 className="header-title">Cat converter</h1>

            {
                props.amountName && <p className="header-amount">{props.amount}x {props.amountName}</p>
            }

            {
                props.amountName &&

                <div className="header-container">

                    <button className="header-button" onClick={() => props.onButtonClick('+')}>+</button>
                    <button className="header-button" onClick={() => props.onButtonClick('-')}>-</button>

                </div>

            }



        </div>

    )

};

Header.propTypes = {
    amount: PropTypes.number.isRequired,
    amountName: PropTypes.string,
    onButtonClick: PropTypes.func.isRequired
};

export default Header;