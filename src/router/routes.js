const routes = [
    {path: '/login', component: import('@/layouts/LoginLayout.vue')},
    {path: '/', component: import('@/layouts/LoginLayout.vue')},
    {
        path: '/home',
        component: import('@/layouts/BaseLayout.vue'),
        children: [
            {path: '/dashboard/travel-agency', component: import('@/pages/dashboard/TravelAgencyPage.vue')},
            {path: '/dashboard/project-management', component: import('@/pages/dashboard/ProjectManagementPage.vue')},
            {path: '/customers', component: import('@/pages/customers/CustomersPage.vue')},
            {path: '/timeline', component: import('@/pages/pages/TimeLinePage.vue')},
            {path: '/members', component: import('@/pages/pages/MembersPage.vue')},
            {path: '/notifications', component: import('@/pages/pages/NotificationsPage.vue')},
        ]
    },
]

export default routes;
