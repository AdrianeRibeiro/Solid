import { LoginView } from '../presentation/login-view'
import { LogStrategy } from '../analytics/log-strategy'
import { ErrorLog } from '../analytics/error-log'
import { ScreenLog } from '../analytics/screen-log'
import { ActionLog } from '../analytics/action-log'
import { SentryAdapter } from '../infra/sentry-adapter'
import { LogglyAdapter } from '../infra/loggly-adapter'
import { FirebaseAdapter } from '../infra/firebase-adapter'
import { GoogleAnalyticsAdapter } from '../infra/google-analytics-adapter'


export const makeLoginView = (): LoginView => {
  const sentryAdapter = new SentryAdapter()
  const errorAnalyticsComposite = new ErrorAnalyticsComposite([
    new SentryAdapter(),
    new LogglyAdapter()
  ])
  const fireBaseAdapter = new FirebaseAdapter()
  const errorLog = new ErrorLog(sentryAdapter)
  const actionLog = new ActionLog(fireBaseAdapter)
  const screenLog = new ScreenLog(fireBaseAdapter)

  const logStrategy = new LogStrategy(errorLog, actionLog, screenLog)

  return new LoginView(logStrategy)
}


