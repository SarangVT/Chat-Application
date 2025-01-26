const formatedTime = (date) => {
    const hours = date.getHours();
    const minute = date.getMinutes();
    const minutes = minute<10 ? `0${minute}` : minute;
    const AMPM = hours > 12 ? 'PM' : 'AM';
    const hour12 = (hours%12)===0 ? 12: (hours%12);
    return `${hour12}:${minutes} ${AMPM}`;
}
export default formatedTime;