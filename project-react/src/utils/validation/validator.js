export const isStringLength = (string, from, to) => {
    return string.length >= from && string.length <= to
};

export const isNotEmpty = (value) => {
    return value === '' ? false : true;
};


