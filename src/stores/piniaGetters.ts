import routes_main from "../router/main_categories";
import { defineStore } from "pinia";
import { piniaState } from "src/stores/piniaState";

export const piniaGetters = defineStore("piniaGetters", {
  getters: {
    getRoutes() {
      const modulesCategoriesArr = JSON.parse(
        JSON.stringify(Object.values(routes_main))
      );

      const categoriesFilteredArr = modulesCategoriesArr.filter(
        (e: any) =>
          (e.childrens &&
            e.childrens.filter(
              (el1: any) =>
                // piniaState().userActions.some(
                //   (ua) =>
                //     ua.app_actions_id === el1.meta.action_id && ua.access_state === 1
                // )
// state.userActions.some(
                //   (ua) =>
                //     ua.app_actions_id === el1.meta.action_id && ua.access_state === 1
                // )
                true
            ).length > 0) ||
          e.is_q_item
      );

      return categoriesFilteredArr;
    },
    getUserMainCategories(): any {
      const modulesCategoriesArr = Object.keys(routes_main).map((key: any) => {
        let deepCloneMC = JSON.parse(JSON.stringify(routes_main[key]));
        return deepCloneMC;
      });

      const categoriesFilteredArr = modulesCategoriesArr.filter(
        (e) =>
          e.childrens.filter((el1: any) =>
            el1.children
              ? el1.children.filter(
                  (el: any) =>
                    piniaState().userActions.some(
                      (ua) =>
                        // ua.url === el.meta.action_id && ua.access_state === 1
                        el.path === (ua.app_action_url)
                        || ( el.path.includes(':') && el.path.includes(ua.app_action_url))
                    )
                  // el
                ).length > 0
              : true
          ).length > 0 || e.is_q_item
      );

      return categoriesFilteredArr.map((e) => {
        const newChildrens = e.childrens.filter((el1: any) => {
          if (el1.children) {
            const newChildren2 = el1.children.filter((el: any) => {
              if (
                el.meta &&
                !el.meta.nomenu
                &&
                piniaState().userActions.some(
                  (ua) =>
                    // ua.url === el.meta.action_id && ua.access_state === 1
                    el.path === (ua.app_action_url)
                    || ( el.path.includes(':') && el.path.includes(ua.app_action_url))
                )
              ) {
                return el;
              }
            });
            el1.children.splice(0, el1.children.length, ...newChildren2);

            if (newChildren2.length > 0) return el1;
          } else {
            return true;
          }
        });
        e.childrens.splice(0, e.childrens.length, ...newChildrens);
        return e;
      });

      return routes_main;
    },
    getColorsInx() {
      return piniaState().colorsInx;
    },
    getActiveList() {
      return piniaState().active_list;
    },
    getUser() {
      return piniaState().user;
    },
    getUsersInfo() {
      return piniaState().usersInfo;
    },
    getCurrentRouteCategoryName() {
      return piniaState().currentRouteCategoryName;
    },
    getCurrentRouteName() {
      return piniaState().currentRouteName;
    },
    getIsDarkMode() {
      return piniaState().isDarkMode;
    },
    getCurLocale() {
      return piniaState().curLocale;
    },
    getLocaleByCode(code) {
      return piniaState().appLocales.find((locale) => locale.code === code);
    },
    getLastCategoryId() {
      return piniaState().last_category_id;
    },
    getDrillingData() {
      return piniaState().drilling;
    },
    getStaffManningTableData() {
      return piniaState().staffManningTableData;
    },
    getRefreshDashboard() {
      return piniaState().refreshDashboard;
    },
  },
});
