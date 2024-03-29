const constants = Object.freeze({
  ONE_DAY_MINS: 24 * 60,
  ONE_DAY_MILLIS: 24 * 60 * 60 * 1000,
  BADGE_COLORS: Object.freeze({
    REMINDER: '#F41A22',
    COUNT: '#2196F3',
  }),
  BADGE_REMINDER_TEXT: '!',
  ALARMS: Object.freeze({
    REMINDER: 'reminder-alarm',
    SCHEDULED_SEARCH: 'scheduled-search-alarm',
    FETCH_DAILY_TRENDS: 'fetch-daily-trends-alarm',
  }),
  CLICK_DELAY: 500,
  DEFAULT_PREFERENCES: Object.freeze({
    desktopIterations: 35,
    mobileIterations: 25,
    delay: 1000,
    autoClick: true,
    randomGuesses: false,
    randomSearch: false,
    randomSearchDelayMin: 1200,
    randomSearchDelayMax: 11800,
    randomSearchIterationsMin: 35,
    randomSearchIterationsMax: 42,
    randomLettersSearch: false,
    blitzSearch: false,
    platformSpoofing: 'desktop-and-mobile',
    customQueries: '',
    searchWithCustomQueries: false,
    searchWithDailyTrends: true,
    searchWithTemplates: true,
    scheduleSearches: false,
    scheduledTime: '18:00',
    scheduledTimeOpensRewardTasks: false,
  }),
  MESSAGE_TYPES: Object.freeze({
    START_SEARCH: 0, // popup => background script
    STOP_SEARCH: 1, // popup => background script
    GET_SEARCH_COUNTS: 2, // popup => background script
    UPDATE_SEARCH_COUNTS: 3, // background script => popup
    CLEAR_SEARCH_COUNTS: 4, // background script => popup
    CORRECT_ANSWER_RECEIVED: 5, // window-variable-grabber script => content script
    OPEN_URL_IN_BACKGROUND: 6, // window-variable-grabber script => content script => background script
  }),
  REWARDS_URL: 'https://rewards.bing.com/',
  DAILY_TRENDS_API: 'https://trends.google.com/trends/api/dailytrends?geo=US',
  NUM_DAILY_TREND_FETCHES: 4,
  // TODO: add more mobile user agents
  MOBILE_USER_AGENTS: [
    'Mozilla/5.0 (Linux; Android 10; SM-G973F Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36',
  ],
  EDGE_USER_AGENT: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.1938.81',
});
