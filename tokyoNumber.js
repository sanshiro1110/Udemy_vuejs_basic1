export const tokyoNumber = {
  data() {
    return {
      title: 'Welecom to Tokyo',
      subTitle: 'Tokyo is a great city',
      number: 0,
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  created() {
    console.log('created in mixin')
  }
}

export const osakaNumber = {
  data() {
    return {
      title: 'Welecom to Osaka',
      subTitle: 'Osaka is a great city',
      number: 0,
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  created() {
    console.log('created in mixin')
  }
}


