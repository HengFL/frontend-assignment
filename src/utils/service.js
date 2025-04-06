/* libs */
import axios from 'axios';
import { constantCase } from "constant-case";
/* shared */
import AppConst from "shared/AppConst";
/* storage */
import userInfoStorage from "storage/userInfoStorage";
/* utils */
import alert from './alert';
import layout from './layout';

/* appConst */
const API_URL = AppConst.API_URL;

/* functions */
const get = (path, isLoading = true, isAlert = true) => {
    layout.loading.show(isLoading);
    let userInfoStore = userInfoStorage.get();
    let accessToken = userInfoStore && userInfoStore.token;
    let token = accessToken ? 'Bearer ' + accessToken : '';
    let url = '';
    if (path.includes('http:') || path.includes('https:')) {
        url = path;
    }
    else {
        url = API_URL + path;
    }
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: url,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': token
            }
        }).then(result => {
            layout.loading.hide(isLoading);
            resolve(result.data)
        }).catch(error => {
            layout.loading.hide(isLoading);
            if (isAlert && path) {
                let lastPath = path.split('/').slice(-1)[0];
                let message = error?.toJSON()?.message || error?.message;
                alert.error(constantCase(lastPath), message);
            }
            reject(error)
        })
    });
};

const post = (path, request, isLoading = true, isAlert = true) => {
    layout.loading.show(isLoading);
    let userInfoStore = userInfoStorage.get();
    let accessToken = userInfoStore && userInfoStore.token;
    let token = accessToken ? 'Bearer ' + accessToken : '';
    let url = '';
    if (path.includes('http:') || path.includes('https:')) {
        url = path;
    }
    else {
        url = API_URL + path;
    }
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: url,
            data: { request: request },
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': token
            }
        }).then(result => {
            layout.loading.hide(isLoading);
            resolve(result.data)
        }).catch(error => {
            layout.loading.hide(isLoading);
            if (isAlert && path) {
                let lastPath = path.split('/').slice(-1)[0];
                let message = error?.toJSON()?.message || error?.message;
                alert.error(message, constantCase(lastPath));
            }
            reject(error)
        })
    });
};

const postFormData = (path, formData, isLoading = true, isAlert = true) => {
    layout.loading.show(isLoading);
    const userInfoStore = userInfoStorage.get();
    const accessToken = userInfoStore && userInfoStore.token;
    const token = accessToken ? "Bearer " + accessToken : "";
    let url = '';
    if (path.includes('http:') || path.includes('https:')) {
        url = path;
    }
    else {
        url = API_URL + path;
    }
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: url,
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': token
            }
        }).then(result => {
            layout.loading.hide(isLoading);
            resolve(result.data)
        }).catch(error => {
            layout.loading.hide(isLoading);
            if (isAlert && path) {
                let lastPath = path.split('/').slice(-1)[0];
                let message = error?.toJSON()?.message || error?.message;
                alert.error(message, constantCase(lastPath));
            }
            reject(error)
        })
    });
};

const service = {
    api: {
        get,
        post,
        postFormData,
    }
}

export default service;