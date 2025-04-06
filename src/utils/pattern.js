const format = reg => event => {
    event.target.value.split('').forEach(s => {
        if (!regular(reg).test(s)) {
            event.target.value = event.target.value.replace(s, '')
        }
    })
}

const custom = reg => event => {
    let regex = new RegExp(reg, 'm');
    event.target.value.split('').forEach(s => {
        if (!regex.test(s)) {
            event.target.value = event.target.value.replace(s, '')
        }
    })
}

const regular = type => {
    let reg = [];
    reg['th'] = /[ก-๙]+/g;
    reg['en'] = /[a-zA-Z]+/g;
    reg['int'] = /[0-9]+/g;
    reg['float'] = /[0-9]|[.]+/g;
    reg['username'] = /[a-z]|[A-Z]|[0-9]|[.]|[@]|[-]+/g;
    reg['email'] = /[a-z]|[A-Z]|[0-9]|[-_@.]+/g;
    return reg[type];
}

const pattern = {
    custom: custom,
    th: format('th'),
    en: format('en'),
    int: format('int'),
    float: format('float'),
    username: format('username'),
    email: format('email'),
}

export default pattern;
