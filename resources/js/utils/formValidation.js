function formValidation(data) {
    const error = {};
    for (const [key, value] of Object.entries(data)) {
        if (value.length === 0) {
            error[`${key}`] = `the field ${key} cannot be empty`;
        }
    }

    return error;
}

export default formValidation;
