import LoginLayout from "@/layouts/LoginLayout.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import CustomersPage from "@/pages/customers/CustomersPage.vue";

const routes = [
    {path: '/login', component: LoginLayout},
    {path: '/', component: LoginLayout},
    {
        path: '/home',
        component: BaseLayout,
        children: [
            {path: '/customers', component: CustomersPage}
        ]
    },
]

export default routes;
