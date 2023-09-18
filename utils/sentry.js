import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'
let sentry = process.env.VUE_APP_sentry
let sentryReleases = process.env.sentry_releases
export default {
  install: (Vue, options) => {
    if (sentry) {
      console.log('sentry:', sentry)
      Sentry.init({
        release: sentryReleases, // 指定release
        dsn: 'https://f91d40ef511744a2b3ee9b06ecdcda68@sentry.io/1505795',
        integrations: [new Integrations.Vue({Vue, attachProps: true})]
      })
    }
  }
}
