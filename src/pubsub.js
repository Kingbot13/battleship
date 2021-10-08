const pubSub = () => {
    const subscribers = {};
    const publish = (eventName, data) => {
        if (!Array.isArray(subscribers[eventName])) {
            return;
        };
        subscribers.forEach((cb) => {
            cb(data);
        });
    };
    const subscribe = (eventName, cb) => {
        if (!Array.isArray(subscribers[eventName])) {
            subscribers[eventName] = [];
        };
        subscribers[eventName].push(cb);
        const index = subscribers[eventName].length - 1;
        return {
            unsubscribe() {
                subscribers[eventName].splice(index, 1);
            },
        };
    };
    return {publish, subscribe};
};

export default pubSub;