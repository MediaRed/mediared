/*
 * Custom theme helpers for Handlebars.js
 */

let themeHelpers = {
    isImageUrl: function(url) {
        if (url) {
            const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
            const extension = url.slice((url.lastIndexOf(".") - 1 >>> 0) + 2); // Get the file extension from the URL
            console.log("isImageUrl", imageExtensions.includes(extension));
            return imageExtensions.includes(extension);
        }
        return false;
    }
};

module.exports = themeHelpers;