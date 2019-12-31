
/**
 * @description Checks wether the input text is URL or not
 * @param {string} inputText
 * @returns {object} a boolean value 'true' or 'false'
 */
function checkURL(inputText) {
    console.log("::: Running checkURL :::", inputText);
    const url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(inputText);
    return url;
}

export { checkURL }
