module.exports = {
  tailwind: {
    mode: 'jit',
    purge: {
      variables: false
    },
    darkMode: false,
    theme: {
      screens: {
        s360: '22.5em',
        s640: '40em',
        s768: '48em',
        s1024: '64em',
        s1280: '80em',
        s1440: '90em',
        s1920: '120em'
      }
    }
  }
};
