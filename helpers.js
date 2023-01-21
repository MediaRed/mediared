/*
 * Custom theme helpers for Handlebars.js
 */

let themeHelpers = {
    isImageUrl: function(url) {
        if (url) {
          const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
          const lastDotIndex = url.lastIndexOf(".");
          if (lastDotIndex !== -1) {
            const extension = url.slice(lastDotIndex).toLowerCase();
            return imageExtensions.some(ext => ext.toLowerCase() === extension);
          }
        }
        return false;
    }
};

module.exports = themeHelpers;