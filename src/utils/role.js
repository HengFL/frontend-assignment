/* libs */
import _ from "lodash";
/* storage */
import userInfoStorage from "storage/userInfoStorage";

const getMenuItem = (items) => {

    let result = [];
    let userInfo = userInfoStorage.get();
    if (!_.isEmpty(userInfo) && items?.length > 0) {
        result = items.filter(item => {

            if (item.pages?.length > 0) {
                item.pages = item.pages?.filter(page => {

                    if (page.children?.length > 0) { /* check menu lavel 2 */
                        page.children = page.children.filter(page2 => {
                            if (page2.role?.includes?.(userInfo.userRole?.id)) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        })

                        if (page.children.length > 0) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else { /* check menu lavel 1 */
                        if (page.role?.includes?.(userInfo.userRole?.id)) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                })
            }

            if (item.pages?.length > 0) {
                return true;
            }
            else {
                return false;
            }
        })
    }
    return result;
}


const exportRole = {
    getMenuItem: getMenuItem,
};

export default exportRole;