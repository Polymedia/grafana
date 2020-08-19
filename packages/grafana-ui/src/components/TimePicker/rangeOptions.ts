import { TimeOption } from '@grafana/data';

export const quickOptions: TimeOption[] = [
  { from: 'now-5m', to: 'now', display: 'Last 5 minutes', section: 3 },
  { from: 'now-15m', to: 'now', display: 'Last 15 minutes', section: 3 },
  { from: 'now-30m', to: 'now', display: 'Last 30 minutes', section: 3 },
  { from: 'now-1h', to: 'now', display: 'Last 1 hour', section: 3 },
  { from: 'now-3h', to: 'now', display: 'Last 3 hours', section: 3 },
  { from: 'now-6h', to: 'now', display: 'Last 6 hours', section: 3 },
  { from: 'now-12h', to: 'now', display: 'Last 12 hours', section: 3 },
  { from: 'now-24h', to: 'now', display: 'Last 24 hours', section: 3 },
  { from: 'now-2d', to: 'now', display: 'Last 2 days', section: 3 },
  { from: 'now-7d', to: 'now', display: 'Last 7 days', section: 3 },
  { from: 'now-30d', to: 'now', display: 'Last 30 days', section: 3 },
  { from: 'now-90d', to: 'now', display: 'Last 90 days', section: 3 },
  { from: 'now-6M', to: 'now', display: 'Last 6 months', section: 3 },
  { from: 'now-1y', to: 'now', display: 'Last 1 year', section: 3 },
  { from: 'now-2y', to: 'now', display: 'Last 2 years', section: 3 },
  { from: 'now-5y', to: 'now', display: 'Last 5 years', section: 3 },
];

export const otherOptions: TimeOption[] = [
  { from: 'now-1d/d', to: 'now-1d/d', display: 'Вчера', section: 3 },
  { from: 'now-2d/d', to: 'now-2d/d', display: 'Позавчереа', section: 3 },
  { from: 'now-7d/d', to: 'now-7d/d', display: 'Этот же день неделю назад', section: 3 },
  { from: 'now-1w/w', to: 'now-1w/w', display: 'Предыдущая неделя', section: 3 },
  { from: 'now-1M/M', to: 'now-1M/M', display: 'Предыдущий месяц', section: 3 },
  { from: 'now-1y/y', to: 'now-1y/y', display: 'Предыдущий год', section: 3 },
  { from: 'now/d', to: 'now/d', display: 'Сегодня', section: 3 },
  { from: 'now/d', to: 'now', display: 'Сегодня до текущего времени', section: 3 },
  { from: 'now/w', to: 'now/w', display: 'Эта неделя', section: 3 },
  { from: 'now/w', to: 'now', display: 'Эта неделя до текущего времени so far', section: 3 },
  { from: 'now/M', to: 'now/M', display: 'Этот месяц', section: 3 },
  { from: 'now/M', to: 'now', display: 'Этот месяц до текущего времени', section: 3 },
  { from: 'now/y', to: 'now/y', display: 'Этот год', section: 3 },
  { from: 'now/y', to: 'now', display: 'Этот год до текущего времени', section: 3 },
];
