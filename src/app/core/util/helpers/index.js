export const getAvatarStyle = (src, bgSize) => src ? ({backgroundImage: `url(${src})`, backgroundSize: bgSize || 'contain'}) : {};

export const getPhotoStyle = (src) => src ? ({backgroundImage: `url(${src})`}) : {};

export const uppercaseFirstLetter = (str) => (str && str.length) ? str[0].toUpperCase() + str.slice(1) : '';