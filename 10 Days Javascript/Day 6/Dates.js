function getDayName(dateString) {
    let dayName;
    // Write your code here
    
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                    'Thursday', 'Friday', 'Saturday'];

    return dayNames[new Date(dateString).getDay()];
}