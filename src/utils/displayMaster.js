import _ from "lodash";

const masterDesc = (value, dataMaster = [], valueKey = 'id', labelKey = 'title') => {
    let desc = "";
    if (dataMaster?.length > 0) {
        let dataFind = dataMaster.find((v) => v[valueKey]?.toString() === value?.toString());
        if (!_.isEmpty(dataFind)) {
            desc = dataFind[labelKey];
        }
    }
    return desc;
};

const companyDesc = (value, dataCompany = []) => {
    let desc = "";
    if (dataCompany?.length > 0) {
        let dataFind = dataCompany.find((v) => v.id?.toString() === value?.toString());
        if (!_.isEmpty(dataFind)) {
            desc = dataFind.title;
        }
    }
    return desc;
};

const displayMasterExport = {
    masterDesc: masterDesc,
    companyDesc: companyDesc,
};

export default displayMasterExport;