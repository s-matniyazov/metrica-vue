import { setCssVar } from "quasar";
import { defineStore } from "pinia";
import { piniaState } from "src/stores/piniaState";
import { piniaGetters } from "./piniaGetters";
import { $axios } from "src/boot/axios";
import { cfghttp, urls } from "src/utils/constants";
import { i18n } from "src/boot/i18n";
import { active_list } from "src/utils/interfaces";
import {nextTick} from "vue";

export const piniaActions = defineStore("piniaActions", {
  actions: {
    setColorsInx(val: any) {
      piniaState().colorsInx = val;
    },
    setUser(val: any) {
      piniaState().user = val;

      const user = piniaGetters().getUser
      if (user) new Promise(async (response, reject) => {
        return await $axios.get(urls.GET_PROFILE_DATA)
        .then(res => {
          piniaState().usersInfo = res.data.rows[0]
          response(res)
        }).catch(error => {
          piniaState().usersInfo = {}
          reject(error)
        })
      })
    },
    setBaseLeftDrawer(val: boolean) {
      piniaState().baseLeftDrawer = val;
    },
    setMiniState(val: boolean) {
      piniaState().miniState = val;
    },
    setCurrentRouteCategoryName(val: string) {
      piniaState().currentRouteCategoryName = val;
    },
    setIsDarkMode(val: number) {
      piniaState().isDarkMode = val;
    },
    setFromRouteName(val: any) {
      piniaState().fromRouteName = val;
    },
    setGlobalError(val: any) {
      piniaState().globalError = val;
    },
    setCurrentRouteName(val: any) {
      piniaState().currentRouteName = val;
    },
    setLoading(val: boolean) {
      piniaState().loading = val;
    },
    setPath(val: any) {
      piniaState().path = val;
    },
    clearUserSession() {
      piniaState().user = null;
      piniaState().userActions.splice(0, piniaState().userActions.length);
      piniaState().usersInfo = {}
      setTimeout(() => {
        piniaActions().setFromRouteName("/")
      }, 1000)
    },
    setCurLocale(val: any) {
      piniaState().curLocale = val;
    },
    setUserImg(val: any) {
      piniaState().user.img_resource_id = val;
    },
    setUserInfo(val: any) {
      piniaState().user.fio = val.fio;
      piniaState().user.email = val.email;
      piniaState().user.phone = val.phone;
    },
    setLastCategoryId(val: any) {
      piniaState().last_category_id = val;
    },
    setNoSeenChat(val: any) {
      piniaState().noSeenChatsCnt = val;
    },
    setUserActions(val: any) {
      piniaState().userActions.splice(
        0,
        piniaState().userActions.length,
        ...val
      );
    },
    setTheme(item: any) {
      if (Object.keys(item).length) {
        setCssVar("primary", item.primary);
        setCssVar("secondary", item.secondary);
        localStorage.primary = item.primary;
        localStorage.secondary = item.secondary;
        let app = document.querySelector("body") as HTMLBodyElement;

        if (item.is_bold) app.setAttribute("class", "night_mode");
        else app.setAttribute("class", "light_mode");

        let r = document.querySelector(":root") as HTMLElement;

        if (item.is_bold) {
          r.style.setProperty("--state-table-bg-color", item.bg_medium);
        } else {
          r.style.setProperty("--state-table-bg-color", "#FFF");
        }

        r.style.setProperty("--state-bg-bold", item.bg_bold);
        r.style.setProperty("--state-bg-medium", item.bg_medium);
        r.style.setProperty("--state-bg-normal", item.bg_normal);
        r.style.setProperty("--state-label_color", item.label_color);
        r.style.setProperty(
          "--state-active_label_color",
          item.active_label_color
        );
        r.style.setProperty("--state-caption_color", item.caption_color);
        r.style.setProperty("--state-bg-color", item.bg);
        r.style.setProperty("--state-primary", item.primary);
        r.style.setProperty("--state-secondary", item.secondary);

        piniaState().themes.forEach((el) => {
          el.selected = false;
          if (el.id == item.id) {
            el.selected = true;
            this.setColorsInx({ inx: el.id, is_bold: el.is_bold });
          }
        });
      }
    },

    async fetchDrillingData(url: string, props: Object) {
      await new Promise((resolve, reject) => {
        $axios
          .get(url, { params: props })
          .then((response) => {
            resolve(response);
            piniaState().drilling.total = response.data.total;
            piniaState().drilling.data =  response.data.rows;
            // piniaState().drilling.pageNum = response.data.pageNum;
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    setActiveMenu(val: any) {
      piniaState().activeMenuName = val;
    },
    setActiveList(val: active_list) {
      piniaState().active_list = val;
    },
    setRefreshDashboard(val: number) {
      piniaState().refreshDashboard++;
    },
    refreshToken() {
      piniaState().axios_retry = 1;

      fetch(cfghttp.BASE_URL + urls.REFRESH_TOKEN, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
        body: `refresh_token=${piniaState().user.p_refresh_token}`,
      })
        .then((status) =>  {
          return status
        })
        .then((res) => {
          if(res.status == 200) {
            piniaState().axios_retry = 0;
          } else {
            piniaState().axios_retry = 2;
            piniaActions().clearUserSession();
            this.router.replace({ name: "login" });
            return Promise.reject({
              type: "warning",
              errorCode: 401,
              errorDescription: "",
              errorMessage: i18n.global.t("http.session_timeout"),
            });
          }
        })
        .catch((err) => {
          piniaState().axios_retry = 2;
          piniaActions().clearUserSession();
          this.router.replace({ name: "login" });
          return Promise.reject({
            type: "warning",
            errorCode: 401,
            errorDescription: "",
            errorMessage: i18n.global.t("http.session_timeout"),
          });
          throw console.error;
        });
    },
  },
});
