
const isMobile = () => {
    var check = false;
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0, 4)))
                check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
    }
    return check;
}

const isTablet = () => {
    var check = false;
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0, 4)))
                check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
    }
    return check;
}

const deviceType = () => {
    let type = "";
    if (isMobile()) {
        type = "MOBILE";
    }
    else if (isTablet()) {
        type = "TABLET";
    }
    else {
        type = "DESKTOP";
    }
    return type;

}

const getBrowserName = (userAgent = navigator.userAgent) => {
    // var userAgent = navigator.userAgent;
    var browser = "unkown";
    browser = (/ucbrowser/i).test(userAgent) ? 'UCBrowser' : browser;
    browser = (/edg/i).test(userAgent) ? 'Microsoft Edge' : browser;
    browser = (/googlebot/i).test(userAgent) ? 'GoogleBot' : browser;
    browser = (/chromium/i).test(userAgent) ? 'Chromium' : browser;
    browser = (/firefox|fxios/i).test(userAgent) && !(/seamonkey/i).test(userAgent) ? 'Firefox' : browser;
    browser = (/; msie|trident/i).test(userAgent) && !(/ucbrowser/i).test(userAgent) ? 'IE' : browser;
    browser = (/chrome|crios/i).test(userAgent) && !(/opr|opera|chromium|edg|ucbrowser|googlebot/i).test(userAgent) ? 'Chrome' : browser;;
    browser = (/safari/i).test(userAgent) && !(/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i).test(userAgent) ? 'Safari' : browser;
    browser = (/opr|opera/i).test(userAgent) ? 'Opera' : browser;
    return browser;
}

const getBrowserVersion = (userAgent = navigator.userAgent) => {
    // var userAgent = navigator.userAgent;
    var browser = getBrowserName(userAgent);
    switch (browser) {
        case 'UCBrowser': return matchBrowserVersion(userAgent, /(ucbrowser)\/([\d.]+)/i);
        case 'Microsoft Edge': return matchBrowserVersion(userAgent, /(edge|edga|edgios|edg)\/([\d.]+)/i);
        case 'GoogleBot': return matchBrowserVersion(userAgent, /(googlebot)\/([\d.]+)/i);
        case 'Chromium': return matchBrowserVersion(userAgent, /(chromium)\/([\d.]+)/i);
        case 'Firefox': return matchBrowserVersion(userAgent, /(firefox|fxios)\/([\d.]+)/i);
        case 'Chrome': return matchBrowserVersion(userAgent, /(chrome|crios)\/([\d.]+)/i);
        case 'Safari': return matchBrowserVersion(userAgent, /(safari)\/([\d.]+)/i);
        case 'Opera': return matchBrowserVersion(userAgent, /(opera|opr)\/([\d.]+)/i);
        case 'IE': var ver = matchBrowserVersion(userAgent, /(trident)\/([\d.]+)/i);
            // IE version is mapped using trident version 
            // IE/8.0 = Trident/4.0, IE/9.0 = Trident/5.0
            return ver ? parseFloat(ver) + 4.0 : 7.0;
        default: return '0.0.0.0';
    }
}

const matchBrowserVersion = (userAgent, regex) => {
    return userAgent.match(regex) ? userAgent.match(regex)[2] : null;
}

const getOsName = (userAgent = navigator.userAgent) => {
    var OSName = "Unknown";
    // var userAgent = navigator.userAgent;
    if (userAgent.indexOf("Windows NT 10.0") !== -1) OSName = "Windows 10";
    if (userAgent.indexOf("Windows NT 6.3") !== -1) OSName = "Windows 8.1";
    if (userAgent.indexOf("Windows NT 6.2") !== -1) OSName = "Windows 8";
    if (userAgent.indexOf("Windows NT 6.1") !== -1) OSName = "Windows 7";
    if (userAgent.indexOf("Windows NT 6.0") !== -1) OSName = "Windows Vista";
    if (userAgent.indexOf("Windows NT 5.1") !== -1) OSName = "Windows XP";
    if (userAgent.indexOf("Windows NT 5.0") !== -1) OSName = "Windows 2000";
    if (userAgent.indexOf("Mac") !== -1) OSName = "Mac/iOS";
    if (userAgent.indexOf("X11") !== -1) OSName = "UNIX";
    if (userAgent.indexOf("Linux") !== -1) OSName = "Linux";
    return OSName;
}

const getOsVersion = (userAgent = navigator.userAgent) => {
    var osName = getOsName(userAgent);
    var version = "";
    if (osName.indexOf("Vista") > -1) {
        version = "6.0"
    }
    else if (osName.indexOf("XP") > -1) {
        version = "5.1"
    }
    else if (osName.indexOf("2000") > -1) {
        version = "5.0"
    }
    else if (osName.indexOf("Windows") > -1) {
        version = osName.split(" ")[1];
    }
    return version;
}

const exportDevice = {
    deviceType: deviceType,
    getBrowserName,
    getBrowserVersion,
    getOsName,
    getOsVersion,
};

export default exportDevice;
