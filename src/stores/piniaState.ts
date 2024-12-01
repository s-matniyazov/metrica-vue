import {defineStore} from "pinia";
import {active_list} from "src/utils/interfaces";

export const piniaState = defineStore("piniaState", {
  state: () => {
    return {
      getPaginationWithoutAll: ['5', '7', '10', '20', '30', '50', '100'],
      appLocales:
        process.env.NODE_ENV !== "production" ? [
        {name: "Русский", code: "ru"},
        {name: "Узбек", code: "uk"},
        {name: "O`zbek", code: "uz"},
        {name: "English", code: "en"},
         { name: "Def", code: "def" }
      ] : [
          {name: "Русский", code: "ru"},
          {name: "Узбек", code: "uk"},
          {name: "O`zbek", code: "uz"},
          {name: "English", code: "en"}
        ],
      user: null as any,
      usersInfo: {} as any,
      userActions: [] as any[],
      curLocale: "",
      colorsInx: {
        inx: 0,
        is_bold: 0,
      },
      isDarkMode: 0,
      baseLeftDrawer: true,
      miniState: false,
      currentRouteCategoryName: "",
      errorCode: null,
      fromRouteName: "",
      globalError: undefined,
      currentRouteName: "",
      loading: false,
      last_category_id: null,
      path: "" as any,
      noSeenChatsCnt: 0,
      activeMenuName: "home",
      active_list: {} as active_list,
      axios_retry: 0,
      alarm_id: null as number | null,
      themes: [
        {
          id: 0,
          bg: "#377375",
          bg_bold: "#377375",
          bg_medium: "#458789",
          bg_normal: "#377375",
          label_color: "#FFFFFF",
          active_label_color: "#ffe307",
          caption_color: "#FFFFFF",
          primary: "#377375",
          secondary: "#CB8829",
          selected: true,
          is_bold: 0,
          dashboard_stroke: "#377375",
          dashboard_bg: "#1b3c3d",
        },
        {
          id: 1,
          bg: "#040D2C",
          bg_bold: "#040D2C",
          bg_medium: "#0c1745",
          bg_normal: "#161F44",
          label_color: "#FFFFFF",
          active_label_color: "#00B1FF",
          caption_color: "#9799a7",
          primary: "#00B1FF",
          secondary: "#CB8829",
          selected: true,
          is_bold: 0,
          dashboard_stroke: "#11569B",
          dashboard_bg: "#050C36",
        },

      ],
      drilling: {
        total: 0,
        pageNum: 1,
        data: [],
      } as any,
      staffManningTableData: [] as any,
      refreshDashboard: 0 as number,
    };
  },
  persist: true,
});
