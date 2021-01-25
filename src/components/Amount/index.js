import PropTypes from "prop-types";
import './style.scss';

const Amount = (props) => {

    return (

        <div className="amount">

            <p className="amount-value">{props.value}</p>
            <p className="amount-currency">{props.currency}</p>
            <p className="amount-comment">{props.comment}</p>

        </div>

    );
};

Amount.propTypes = {
    value: PropTypes.number,
    currency: PropTypes.string,
    comment: PropTypes.string
};

export default Amount;