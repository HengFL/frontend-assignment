import { createContext, useEffect, useReducer } from "react";
/* libs */
import _ from "lodash";
import moment from "moment";
/* shared */
import AppConst from "shared/AppConst";
/* storage */
import userInfoStorage from "../storage/userInfoStorage";
/* utils */
import service from "../utils/service";
import common from "utils/common";

/* action type */
const INITIALIZE = "INITIALIZE";
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

/* initial state */
const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  userInfo: {},
};

/* reducer */
const JWTReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        userInfo: action.payload.userInfo
      };
    case LOG_IN:
      return {
        ...state,
        isAuthenticated: true,
        userInfo: action.payload.userInfo,
      };
    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        userInfo: {},
      };
    default:
      return state;
  }
};

/* context */
const AuthContext = createContext({
  ...initialState,
  platform: "JWT",
  login: () => Promise.resolve(),
  skip: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  newPassword: () => Promise.resolve(),

});

/* provider */
function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);
  /* useEffect */
  useEffect(() => {
    const initialize = async () => {
      try {
        let userInfoStore = userInfoStorage.get();
        let checkSession = common.checkSession();
        // console.log("checkSession", checkSession);
        if (!_.isEmpty(userInfoStore)) {
          if (checkSession === true) {
            dispatch({
              type: INITIALIZE,
              payload: {
                isAuthenticated: true,
                userInfo: userInfoStore,
              },
            });
          }
          else {
            dispatch({
              type: INITIALIZE,
              payload: {
                isAuthenticated: false,
                ususerInfoer: {},
              },
            });
            userInfoStorage.remove();
            window.location.href = "/auth/login"
          }
        }
        else {
          dispatch({
            type: INITIALIZE,
            payload: {
              isAuthenticated: false,
              ususerInfoer: {},
            },
          });
        }
      }
      catch (error) {
        console.error("initialize error : ", error);
        dispatch({
          type: INITIALIZE,
          payload: {
            isAuthenticated: false,
            ususerInfoer: {},
          },
        });
      }
    };
    initialize();
  }, []);

  /* functions */
  const login = async (request) => {
    return new Promise(async (resolve, reject) => {
      await service.api.post('Permission/Login', request, false, false).then((response) => {
        if (response.success === true) {
          //add session expired
          let userLogin = {
            ...response.responseObject,
            isSkip: false,
            sessionExpired: moment().add(AppConst.SESSION_EXPIRED_MINUTES, 'minutes').format()
          }
          userInfoStorage.set(userLogin);
          dispatch({
            type: "LOG_IN",
            payload: {
              userInfo: response.responseObject,
            }
          });
        }
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  const skip = async () => {
    return new Promise(async (resolve, reject) => {
      let user = {
        isSkip: true,
        fullname: "ไม่ระบุชื่อ ไม่ระบุนามสกุล",
        userId: "000000",
        positionName: "ไม่ระบุตำแหน่ง",
      }
      userInfoStorage.set(user);
      dispatch({
        type: "LOG_IN",
        payload: {
          userInfo: user,
        }
      });
      resolve(user);
    });
  };


  const logout = async () => {
    userInfoStorage.remove();
    dispatch({ type: LOG_OUT });
  };

  const newPassword = async (request) => {
    return new Promise(async (resolve, reject) => {
      await service.api.post('Criteria/ResetPasswordPMS', request, false, false).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        login,
        skip,
        logout,
        newPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
