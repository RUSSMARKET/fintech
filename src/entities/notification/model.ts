import type { ToastServiceMethods } from "primevue"

export default class NotificationsClass {
    static notifications: Array<Object> = []
    static toast: ToastServiceMethods

    public static init = (toast) => {
        this.notifications = JSON.parse(localStorage.getItem('Notifications')) || []
        this.toast = toast
    }

    public static get = () => {
        return this.notifications;
    }

    public static removeNotification = (key: number) => {
        if (key >= 0) {
            this.notifications.splice(key, 1)
            localStorage.setItem('Notifications', JSON.stringify(this.notifications))
            return this.notifications;
        }
        return false;
    }

    public static send = (severity: string, summary: string, detail: string) => {
        this.notifications.push({
            severity: severity,
            summary: summary,
            detail: detail,
        });
        this.toast.add({ severity: severity, summary: summary, detail: detail, life: 3000 });
        localStorage.setItem('Notifications', JSON.stringify(this.notifications))
    }
}