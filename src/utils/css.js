
const bgStatus = (code = "") => {
    let result = '';
    if (code === 'SAVE') {
        result = 'bg-info';
    }
    else if (code === 'WAIT_FIX') {
        result = 'bg-danger';
    }
    else if (code === 'WAIT_APPROVE') {
        result = 'bg-warning';
    }
    else if (code === 'APPROVE') {
        result = 'bg-success';
    }
    else {
        result = 'bg-secondary';
    }
    return result;
}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const css = {
    bgStatus: bgStatus,
    randomColor: randomColor,
}

export default css;