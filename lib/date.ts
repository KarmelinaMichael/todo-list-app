import type {Weekday} from './types';
export function localDate(d=new Date()){const y=d.getFullYear();const m=String(d.getMonth()+1).padStart(2,'0');const day=String(d.getDate()).padStart(2,'0');return `${y}-${m}-${day}`}
export function addDays(d:Date,n:number){const x=new Date(d);x.setDate(x.getDate()+n);return x}
export function weekday(d=new Date()):Weekday{return d.getDay() as Weekday}
export function timePassed(time?:string, now=new Date()){if(!time)return false;const [h,m]=time.split(':').map(Number);return now.getHours()*60+now.getMinutes() > h*60+m}
export function formatDay(d=new Date()){return new Intl.DateTimeFormat(undefined,{weekday:'long',month:'long',day:'numeric'}).format(d)}
export function weekdayName(d:Weekday){return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][d]}
