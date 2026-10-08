import type {Task} from './types';
const id=()=>crypto.randomUUID();
export const defaultTasks=():Task[]=>[
['Work','work',[0,1,2,3,4],'10:00',0],['Bedroom 1','home',[0],undefined,1],['Bedroom 2','home',[1],undefined,2],['Bathroom 1','home',[2],undefined,3],['Bathroom 2','home',[3],undefined,4],['Kitchen / Living rotation','home',[4],undefined,5],['Daughter time','daughter',[0,1,2,3,4],'16:30',6],['Gym','me',[1,3],'18:00',7],['Lunch box','prep',[0,1,2,3,4],'21:00',8],['Dinner prep','prep',[0,1,2,3,4],'21:30',9],['Me time','me',[0,1,2,3,4],'22:00',10],['Couple time','couple',[0,1,2,3,4],'22:45',11]].map(([title,category,days,time,order])=>({id:id(),title:String(title),category:category as any,days:days as any,time:time as string,order:Number(order),active:true,reminderEnabled:false,reminderTime:time as string}));
export const defaultSettings={name:'',eveningMode:{enabled:true,startTime:'20:00',endTime:'06:00'},notificationsEnabled:false,motivationalMessages:true};
