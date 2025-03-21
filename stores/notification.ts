export const useNotification = defineStore('Notification', () => {
    var notifications:Array<Object> = []
    const toast = useToast()

    const init = () => {
        notifications = JSON.parse(localStorage.getItem('Notifications')) || []
    }

    const get = () => {
        return notifications;
    }

    const removeNotification = (key: number) => {
        if (key >= 0) {
            notifications.splice(key, 1)
            localStorage.setItem('Notifications', JSON.stringify(notifications))
            return notifications;
        }
        return false;
    }

    const send = (severity: string, summary: string, detail: string) => {
        notifications.push({
            severity: severity,
            summary: summary,
            detail: detail,
        });
        toast.add({ severity: severity, summary: summary, detail: detail, life: 3000 });
        localStorage.setItem('Notifications', JSON.stringify(notifications))
    }
})