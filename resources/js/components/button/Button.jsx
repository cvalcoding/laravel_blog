import PropTypes from "prop-types";

function Button({ children, type = "submit", color = "primary" }) {
    return (
        <button className={`btn btn-${color}`} type={type}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.any,
    type: PropTypes.string,
    color: PropTypes.string,
};

export default Button;
