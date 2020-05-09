import addNotification from 'react-push-notification';

const options = {
    title: 'Test notification',
    subtitle: 'Notification subtitle',
    message: 'Notification message',
};

const handleClick = () => {
    // native web notification
    addNotification({
        ...options,
        native: true,
    });
    
    // in-app notification
    addNotification({
        ...options,
    });
}

export {handleClick};
