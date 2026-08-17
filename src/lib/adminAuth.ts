import{createHmac,timingSafeEqual}from'node:crypto';
const development=process.env.NODE_ENV!=='production';
export const adminEmail=process.env.ADMIN_EMAIL||(development?'admin@meridian.demo':'');
const adminPassword=process.env.ADMIN_PASSWORD||(development?'Meridian2026!':'');
const secret=process.env.ADMIN_SESSION_SECRET||(development?'local-development-session-secret':'');
export const cookieName='meridian_admin_session';
export function validCredentials(email:string,password:string){if(!adminEmail||!adminPassword||!secret)return false;const a=Buffer.from(email+'\0'+password);const b=Buffer.from(adminEmail+'\0'+adminPassword);return a.length===b.length&&timingSafeEqual(a,b)}
export function sessionToken(){return createHmac('sha256',secret).update(adminEmail+'|meridian-admin').digest('hex')}
export function validSession(value?:string){if(!value||!adminEmail||!secret)return false;const a=Buffer.from(value),b=Buffer.from(sessionToken());return a.length===b.length&&timingSafeEqual(a,b)}
