import PropTypes from "prop-types";

function Input({
    label,
    type = "text",
    id,
    name,
    placeholder,
    value,
    onChange,
    className,
}) {
    return (
        <>
            {label && (
                <label className="form-label" htmlFor={name}>
                    {label}
                </label>
            )}

            <input
                className={"form-control " + className}
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.object,
    name: PropTypes.string,
    className: PropTypes.string,
};

export default Input;
