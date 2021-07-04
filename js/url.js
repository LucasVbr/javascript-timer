function getTimeUrl() {
    let time = 0;

    if (!urlParams.has('seconds')
        && !urlParams.has('minutes')
        && !urlParams.has('hours')) {
            time = 300
    } else {
        if (urlParams.has('seconds'))
            time += parseInt(urlParams.get('seconds'));
        if (urlParams.has('minutes'))
            time += parseInt(urlParams.get('minutes')) * 60;
        if (urlParams.has('hours'))
            time += parseInt(urlParams.get('hours')) * 3600;
    }
    
    return time;
}