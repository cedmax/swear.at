require('dotenv').config()

const defaultListenPort = 3000

const portFromEnv = () => {
  const x = parseInt(process.env.PORT, 10)
  /* istanbul ignore next */
  return (x !== null && !isNaN(x)) ? x : defaultListenPort
}

module.exports = {
  'plugins': {
    'inert': {
      'enable': true
    },
    'electrodeStaticPaths': {
      'enable': true,
      'options': {
        'pathPrefix': 'dist'
      }
    },
    'webapp': {
      'module': 'electrode-react-webapp/lib/koa',
      'options': {
        'pageTitle': 'Swear at...',
        'paths': {
          '/share/*': {
            'content': () => {
              return Promise.resolve({
                status: 200,
                html: '<div style="padding:10px;">Redirecting...</div>'
              })
            }
          },
          '*': {
            'content': {
              'module': './{{env.APP_SRC_DIR}}/server/views/index-view'
            }
          }
        }
      }
    }
  },
  'connections': {
    'default': {
      'host': process.env.HOST,
      'address': process.env.HOST_IP || '0.0.0.0',
      'port': portFromEnv(),
      'routes': {
        'cors': true
      },
      'state': {
        'ignoreErrors': true
      }
    }
  }
}
