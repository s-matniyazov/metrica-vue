<template>
  <nav class="navbar navbar-vertical navbar-expand-lg">
    {{routerStore.currentRouter}}
    <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
      <div class="navbar-vertical-content">
        <ul class="navbar-nav flex-column" id="navbarVerticalNav">
          <li class="nav-item">

            <div class="nav-item-wrapper">
              <DropdownMenu v-model="routerStore.currentRouter" menu-title="Home" :list="homeLinks"/>
            </div>
          </li>

          <li class="nav-item">
            <p class="navbar-vertical-label">Apps</p>
            <hr class="navbar-vertical-line"/>
            <div class="nav-item-wrapper">
              <DropdownMenu menu-title="E commerce" :list="eCommerceLinks"/>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-e-commerce">
                  <li class="collapsed-nav-item-title d-none">E commerce</li>
                  <li class="nav-item">
                    <DropdownMenu menu-title="Admin" :list="homeLinks"/>
                    <router-link class="nav-link dropdown-indicator" to="#nv-admin"
                                 data-bs-toggle="collapse" aria-expanded="true" aria-controls="nv-admin">
                      <div class="d-flex align-items-center">
                        <div class="dropdown-indicator-icon-wrapper"><span
                            class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                        <span
                            class="nav-link-text">Admin</span>
                      </div>
                    </router-link>
                    <div class="parent-wrapper">
                      <ul class="nav collapse parent show" data-bs-parent="#e-commerce" id="nv-admin">
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/e-commerce/admin/add-product">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Add product</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/e-commerce/admin/products">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Products</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/e-commerce/admin/customers">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Customers</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link"
                                       to="../apps/e-commerce/admin/customer-details">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Customer details</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/e-commerce/admin/orders">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Orders</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/e-commerce/admin/order-details">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Order details</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/e-commerce/admin/refund">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Refund</span></div>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link dropdown-indicator" to="#nv-customer"
                                 data-bs-toggle="collapse" aria-expanded="true" aria-controls="nv-customer">
                      <div class="d-flex align-items-center">
                        <div class="dropdown-indicator-icon-wrapper"><span
                            class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                        <span
                            class="nav-link-text">Customer</span>
                      </div>
                    </router-link>
                    <div class="parent-wrapper">
                      <ul class="nav collapse parent show" data-bs-parent="#e-commerce" id="nv-customer">
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/e-commerce/landing/homepage">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Homepage</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link"
                                       to="../apps/e-commerce/landing/product-details">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Product details</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link"
                                       to="../apps/e-commerce/landing/products-filter">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Products filter</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/e-commerce/landing/cart">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Cart</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/e-commerce/landing/checkout">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Checkout</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/e-commerce/landing/shipping-info">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Shipping info</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/e-commerce/landing/profile">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Profile</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link"
                                       to="../apps/e-commerce/landing/favourite-stores">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Favourite stores</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/e-commerce/landing/wishlist">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Wishlist</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link"
                                       to="../apps/e-commerce/landing/order-tracking">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Order tracking</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/e-commerce/landing/invoice">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Invoice</span></div>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-CRM" role="button"
                           data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-CRM">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="phone"></span></span><span
                    class="nav-link-text">CRM</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-CRM">
                  <li class="collapsed-nav-item-title d-none">CRM</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/crm/analytics">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Analytics</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/crm/deals">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Deals</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/crm/deal-details">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Deal details</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/crm/leads">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Leads</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/crm/lead-details">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Lead details</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/crm/reports">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Reports</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/crm/report-details">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Report details</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/crm/add-contact">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Add contact</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-project-management"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-project-management">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="clipboard"></span></span><span
                    class="nav-link-text">Project management</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-project-management">
                  <li class="collapsed-nav-item-title d-none">Project management</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/project-management/create-new">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Create new</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/project-management/project-list-view">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Project list view</span>
                      </div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/project-management/project-card-view">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Project card view</span>
                      </div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/project-management/project-board-view">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Project board view</span>
                      </div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/project-management/todo-list">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Todo list</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/project-management/project-details">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Project details</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-travel-agency"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-travel-agency">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="briefcase"></span></span><span
                    class="nav-link-text">Travel agency</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-travel-agency">
                  <li class="collapsed-nav-item-title d-none">Travel agency</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/travel-agency/landing">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Landing</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link dropdown-indicator" to="#nv-hotel"
                                 data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-hotel">
                      <div class="d-flex align-items-center">
                        <div class="dropdown-indicator-icon-wrapper"><span
                            class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                        <span
                            class="nav-link-text">Hotel</span>
                      </div>
                    </router-link>
                    <div class="parent-wrapper">
                      <ul class="nav collapse parent" data-bs-parent="#travel-agency" id="nv-hotel">
                        <li class="nav-item">
                          <router-link class="nav-link dropdown-indicator" to="#nv-hotel-admin"
                                       data-bs-toggle="collapse" aria-expanded="false"
                                       aria-controls="nv-hotel-admin">
                            <div class="d-flex align-items-center">
                              <div class="dropdown-indicator-icon-wrapper"><span
                                  class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                              <span
                                  class="nav-link-text">Admin</span>
                            </div>
                          </router-link>
                          <div class="parent-wrapper">
                            <ul class="nav collapse parent" data-bs-parent="#hotel" id="nv-hotel-admin">
                              <li class="nav-item">
                                <router-link class="nav-link"
                                             to="../apps/travel-agency/hotel/admin/add-property">
                                  <div class="d-flex align-items-center"><span class="nav-link-text">Add
                                        property</span></div>
                                </router-link>
                              </li>
                              <li class="nav-item">
                                <router-link class="nav-link"
                                             to="../apps/travel-agency/hotel/admin/add-room">
                                  <div class="d-flex align-items-center"><span class="nav-link-text">Add room</span>
                                  </div>
                                </router-link>
                              </li>
                              <li class="nav-item">
                                <router-link class="nav-link"
                                             to="../apps/travel-agency/hotel/admin/room-listing">
                                  <div class="d-flex align-items-center"><span class="nav-link-text">Room
                                        listing</span></div>
                                </router-link>
                              </li>
                              <li class="nav-item">
                                <router-link class="nav-link"
                                             to="../apps/travel-agency/hotel/admin/room-search">
                                  <div class="d-flex align-items-center"><span class="nav-link-text">Search
                                        room</span></div>
                                </router-link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link dropdown-indicator" to="#nv-hotel-customer"
                                       data-bs-toggle="collapse" aria-expanded="false"
                                       aria-controls="nv-hotel-customer">
                            <div class="d-flex align-items-center">
                              <div class="dropdown-indicator-icon-wrapper"><span
                                  class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                              <span
                                  class="nav-link-text">Customer</span>
                            </div>
                          </router-link>
                          <div class="parent-wrapper">
                            <ul class="nav collapse parent" data-bs-parent="#hotel" id="nv-hotel-customer">
                              <li class="nav-item">
                                <router-link class="nav-link"
                                             to="../apps/travel-agency/hotel/customer/homepage">
                                  <div class="d-flex align-items-center"><span class="nav-link-text">Homepage</span>
                                  </div>
                                </router-link>
                              </li>
                              <li class="nav-item">
                                <router-link class="nav-link"
                                             to="../apps/travel-agency/hotel/customer/hotel-details">
                                  <div class="d-flex align-items-center"><span class="nav-link-text">Hotel
                                        details</span></div>
                                </router-link>
                              </li>
                              <li class="nav-item">
                                <router-link class="nav-link"
                                             to="../apps/travel-agency/hotel/customer/hotel-compare">
                                  <div class="d-flex align-items-center"><span class="nav-link-text">Hotel
                                        compare</span></div>
                                </router-link>
                              </li>
                              <li class="nav-item">
                                <router-link class="nav-link"
                                             to="../apps/travel-agency/hotel/customer/checkout">
                                  <div class="d-flex align-items-center"><span class="nav-link-text">Checkout</span>
                                  </div>
                                </router-link>
                              </li>
                              <li class="nav-item">
                                <router-link class="nav-link"
                                             to="../apps/travel-agency/hotel/customer/payment">
                                  <div class="d-flex align-items-center"><span class="nav-link-text">Payment</span>
                                  </div>
                                </router-link>
                              </li>
                              <li class="nav-item">
                                <router-link class="nav-link"
                                             to="../apps/travel-agency/hotel/customer/gallery">
                                  <div class="d-flex align-items-center"><span class="nav-link-text">Gallery</span>
                                  </div>
                                </router-link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link dropdown-indicator" to="#nv-flight"
                                 data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-flight">
                      <div class="d-flex align-items-center">
                        <div class="dropdown-indicator-icon-wrapper"><span
                            class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                        <span
                            class="nav-link-text">Flight</span>
                      </div>
                    </router-link>
                    <div class="parent-wrapper">
                      <ul class="nav collapse parent" data-bs-parent="#travel-agency" id="nv-flight">
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/travel-agency/flight/homepage">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Homepage</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/travel-agency/flight/booking">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Booking</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/travel-agency/flight/payment">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Payment</span></div>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link dropdown-indicator" to="#nv-trip"
                                 data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-trip">
                      <div class="d-flex align-items-center">
                        <div class="dropdown-indicator-icon-wrapper"><span
                            class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                        <span
                            class="nav-link-text">Trip</span>
                      </div>
                    </router-link>
                    <div class="parent-wrapper">
                      <ul class="nav collapse parent" data-bs-parent="#travel-agency" id="nv-trip">
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/travel-agency/trip/homepage">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Homepage</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/travel-agency/trip/trip-details">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Trip details</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../apps/travel-agency/trip/checkout">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Checkout</span></div>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link label-1" to="../apps/chat" role="button"
                           data-bs-toggle="" aria-expanded="false">
                <div class="d-flex align-items-center"><span class="nav-link-icon"><span
                    data-feather="message-square"></span></span><span class="nav-link-text-wrapper"><span
                    class="nav-link-text">Chat</span></span></div>
              </router-link>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-email"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-email">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="mail"></span></span><span
                    class="nav-link-text">Email</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-email">
                  <li class="collapsed-nav-item-title d-none">Email</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/email/inbox">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Inbox</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/email/email-detail">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Email detail</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/email/compose">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Compose</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-events"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-events">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="bookmark"></span></span><span
                    class="nav-link-text">Events</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-events">
                  <li class="collapsed-nav-item-title d-none">Events</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/events/create-an-event">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Create an event</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/events/event-detail">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Event detail</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-kanban"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-kanban">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="trello"></span></span><span
                    class="nav-link-text">Kanban</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-kanban">
                  <li class="collapsed-nav-item-title d-none">Kanban</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/kanban/kanban">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Kanban</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/kanban/boards">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Boards</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/kanban/create-kanban-board">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Create board</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-social"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-social">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="share-2"></span></span><span
                    class="nav-link-text">Social</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-social">
                  <li class="collapsed-nav-item-title d-none">Social</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/social/profile">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Profile</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/social/settings">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Settings</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-gallery"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-gallery">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="image"></span></span><span
                    class="nav-link-text">Gallery</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-gallery">
                  <li class="collapsed-nav-item-title d-none">Gallery</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/gallery/album">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Album</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/gallery/gallery-column">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Gallery column</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/gallery/gallery-grid">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Gallery grid</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/gallery/grid-with-title">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Grid with title</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/gallery/gallery-masonry">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Gallery masonry</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/gallery/gallery-slider">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Gallery slider</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-file-manager"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-file-manager">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="folder"></span></span><span class="nav-link-text">File
                      manager</span><span
                    class="badge ms-2 badge badge-phoenix badge-phoenix-warning nav-link-badge">new</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-file-manager">
                  <li class="collapsed-nav-item-title d-none">File manager</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/file-manager/grid-view">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Grid view</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../apps/file-manager/list-view">
                      <div class="d-flex align-items-center"><span class="nav-link-text">List view</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link label-1" to="../apps/calendar" role="button"
                           data-bs-toggle="" aria-expanded="false">
                <div class="d-flex align-items-center"><span class="nav-link-icon"><span
                    data-feather="calendar"></span></span><span class="nav-link-text-wrapper"><span
                    class="nav-link-text">Calendar</span></span></div>
              </router-link>
            </div>
          </li>

          <li class="nav-item">
            <!-- label-->
            <p class="navbar-vertical-label">Pages</p>
            <hr class="navbar-vertical-line"/>
            <div class="nav-item-wrapper">
              <router-link class="nav-link label-1" to="starter" role="button"
                           data-bs-toggle="" aria-expanded="false">
                <div class="d-flex align-items-center"><span class="nav-link-icon"><span
                    data-feather="compass"></span></span><span class="nav-link-text-wrapper"><span
                    class="nav-link-text">Starter</span></span></div>
              </router-link>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-faq" role="button"
                           data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-faq">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="help-circle"></span></span><span
                    class="nav-link-text">Faq</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-faq">
                  <li class="collapsed-nav-item-title d-none">Faq</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="faq/faq-accordion">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Faq accordion</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="faq/faq-tab">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Faq tab</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-landing"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-landing">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="globe"></span></span><span
                    class="nav-link-text">Landing</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-landing">
                  <li class="collapsed-nav-item-title d-none">Landing</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="landing/default">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Default</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="landing/alternate">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Alternate</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-pricing"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-pricing">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="tag"></span></span><span
                    class="nav-link-text">Pricing</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-pricing">
                  <li class="collapsed-nav-item-title d-none">Pricing</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="pricing/pricing-column">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Pricing column</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="pricing/pricing-grid">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Pricing grid</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link label-1" to="notifications" role="button"
                           data-bs-toggle="" aria-expanded="false">
                <div class="d-flex align-items-center"><span class="nav-link-icon"><span
                    data-feather="bell"></span></span><span class="nav-link-text-wrapper"><span
                    class="nav-link-text">Notifications</span></span></div>
              </router-link>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link label-1" to="/members" role="button"
                           data-bs-toggle="" aria-expanded="false">
                <div class="d-flex align-items-center"><span class="nav-link-icon"><span
                    data-feather="users"></span></span><span class="nav-link-text-wrapper"><span
                    class="nav-link-text">Members</span></span></div>
              </router-link>
            </div>
            <div class="nav-item-wrapper">
              <router-link to="/timeline" class="nav-link active label-1">
                <div class="d-flex align-items-center">
                  <span class="nav-link-icon">
                    <span></span>
                  </span>
                  <span class="nav-link-text-wrapper">
                    <span class="nav-link-text">Timeline</span></span>
                </div>
              </router-link>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="/errors">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="alert-triangle"></span></span><span
                    class="nav-link-text">Errors</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-errors">
                  <li class="collapsed-nav-item-title d-none">Errors</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="errors/404">
                      <div class="d-flex align-items-center"><span class="nav-link-text">404</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="errors/403">
                      <div class="d-flex align-items-center"><span class="nav-link-text">403</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="errors/500">
                      <div class="d-flex align-items-center"><span class="nav-link-text">500</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-authentication"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-authentication">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="lock"></span></span><span
                    class="nav-link-text">Authentication</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-authentication">
                  <li class="collapsed-nav-item-title d-none">Authentication</li>
                  <li class="nav-item">
                    <router-link class="nav-link dropdown-indicator" to="#nv-simple"
                                 data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-simple">
                      <div class="d-flex align-items-center">
                        <div class="dropdown-indicator-icon-wrapper"><span
                            class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                        <span
                            class="nav-link-text">Simple</span>
                      </div>
                    </router-link>
                    <div class="parent-wrapper">
                      <ul class="nav collapse parent" data-bs-parent="#authentication" id="nv-simple">
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/simple/sign-in">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Sign in</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/simple/sign-up">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Sign up</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/simple/sign-out">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Sign out</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/simple/forgot-password">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Forgot password</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/simple/reset-password">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Reset password</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/simple/lock-screen">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Lock screen</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/simple/2FA">
                            <div class="d-flex align-items-center"><span class="nav-link-text">2FA</span></div>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link dropdown-indicator" to="#nv-split"
                                 data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-split">
                      <div class="d-flex align-items-center">
                        <div class="dropdown-indicator-icon-wrapper"><span
                            class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                        <span
                            class="nav-link-text">Split</span>
                      </div>
                    </router-link>
                    <div class="parent-wrapper">
                      <ul class="nav collapse parent" data-bs-parent="#authentication" id="nv-split">
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/split/sign-in">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Sign in</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/split/sign-up">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Sign up</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/split/sign-out">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Sign out</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/split/forgot-password">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Forgot password</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/split/reset-password">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Reset password</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/split/lock-screen">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Lock screen</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/split/2FA">
                            <div class="d-flex align-items-center"><span class="nav-link-text">2FA</span></div>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link dropdown-indicator" to="#nv-Card"
                                 data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-Card">
                      <div class="d-flex align-items-center">
                        <div class="dropdown-indicator-icon-wrapper"><span
                            class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                        <span
                            class="nav-link-text">Card</span>
                      </div>
                    </router-link>
                    <div class="parent-wrapper">
                      <ul class="nav collapse parent" data-bs-parent="#authentication" id="nv-Card">
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/card/sign-in">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Sign in</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/card/sign-up">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Sign up</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/card/sign-out">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Sign out</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/card/forgot-password">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Forgot password</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/card/reset-password">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Reset password</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/card/lock-screen">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Lock screen</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="authentication/card/2FA">
                            <div class="d-flex align-items-center"><span class="nav-link-text">2FA</span></div>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-layouts"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-layouts">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="layout"></span></span><span
                    class="nav-link-text">Layouts</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-layouts">
                  <li class="collapsed-nav-item-title d-none">Layouts</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../demo/vertical-sidenav">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Vertical sidenav</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../demo/dark-mode">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Dark mode</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../demo/sidenav-collapse">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Sidenav collapse</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../demo/darknav">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Darknav</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../demo/topnav-slim">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Topnav slim</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../demo/navbar-horizontal" target="_blank">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Navbar horizontal</span>
                      </div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../demo/horizontal-slim" target="_blank">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Horizontal slim</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../demo/combo-nav">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Combo nav</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../demo/combo-nav-slim">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Combo nav slim</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../demo/dual-nav" target="_blank">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Dual nav</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <!-- label-->
            <p class="navbar-vertical-label">Modules</p>
            <hr class="navbar-vertical-line"/>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-forms"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-forms">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="file-text"></span></span><span
                    class="nav-link-text">Forms</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-forms">
                  <li class="collapsed-nav-item-title d-none">Forms</li>
                  <li class="nav-item">
                    <router-link class="nav-link dropdown-indicator" to="#nv-basic"
                                 data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-basic">
                      <div class="d-flex align-items-center">
                        <div class="dropdown-indicator-icon-wrapper"><span
                            class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                        <span
                            class="nav-link-text">Basic</span>
                      </div>
                    </router-link>
                    <div class="parent-wrapper">
                      <ul class="nav collapse parent" data-bs-parent="#forms" id="nv-basic">
                        <li class="nav-item">
                          <router-link class="nav-link" to="../modules/forms/basic/form-control">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Form control</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../modules/forms/basic/input-group">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Input group</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../modules/forms/basic/select">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Select</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../modules/forms/basic/checks">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Checks</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../modules/forms/basic/range">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Range</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../modules/forms/basic/floating-labels">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Floating labels</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../modules/forms/basic/layout">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Layout</span></div>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link dropdown-indicator" to="#nv-advance"
                                 data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-advance">
                      <div class="d-flex align-items-center">
                        <div class="dropdown-indicator-icon-wrapper"><span
                            class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                        <span
                            class="nav-link-text">Advance</span>
                      </div>
                    </router-link>
                    <div class="parent-wrapper">
                      <ul class="nav collapse parent" data-bs-parent="#forms" id="nv-advance">
                        <li class="nav-item">
                          <router-link class="nav-link" to="../modules/forms/advance/advance-select">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Advance select</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../modules/forms/advance/date-picker">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Date picker</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../modules/forms/advance/editor">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Editor</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../modules/forms/advance/file-uploader">
                            <div class="d-flex align-items-center"><span class="nav-link-text">File uploader</span>
                            </div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../modules/forms/advance/range">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Range</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../modules/forms/advance/rating">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Rating</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../modules/forms/advance/emoji-button">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Emoji button</span>
                            </div>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/forms/validation">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Validation</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/forms/wizard">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Wizard</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-icons"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-icons">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="grid"></span></span><span
                    class="nav-link-text">Icons</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-icons">
                  <li class="collapsed-nav-item-title d-none">Icons</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/icons/feather">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Feather</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/icons/font-awesome">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Font awesome</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/icons/unicons">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Unicons</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-tables"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-tables">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="columns"></span></span><span
                    class="nav-link-text">Tables</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-tables">
                  <li class="collapsed-nav-item-title d-none">Tables</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/tables/basic-tables">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Basic tables</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/tables/advance-tables">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Advance tables</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/tables/bulk-select">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Bulk Select</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-ECharts"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-ECharts">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="bar-chart-2"></span></span><span
                    class="nav-link-text">ECharts</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-ECharts">
                  <li class="collapsed-nav-item-title d-none">ECharts</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/echarts/line-charts">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Line charts</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/echarts/bar-charts">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Bar charts</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/echarts/candlestick-charts">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Candlestick charts</span>
                      </div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/echarts/geo-map">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Geo map</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/echarts/scatter-charts">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Scatter charts</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/echarts/pie-charts">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Pie charts</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/echarts/gauge-chart">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Gauge chart</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/echarts/radar-charts">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Radar charts</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/echarts/heatmap-charts">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Heatmap charts</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/echarts/how-to-use">
                      <div class="d-flex align-items-center"><span class="nav-link-text">How to use</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-components"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-components">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="package"></span></span><span
                    class="nav-link-text">Components</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-components">
                  <li class="collapsed-nav-item-title d-none">Components</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/accordion">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Accordion</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/avatar">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Avatar</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/alerts">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Alerts</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/badge">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Badge</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/breadcrumb">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Breadcrumb</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/button">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Buttons</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/calendar">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Calendar</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/card">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Card</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link dropdown-indicator" to="#nv-carousel"
                                 data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-carousel">
                      <div class="d-flex align-items-center">
                        <div class="dropdown-indicator-icon-wrapper"><span
                            class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                        <span
                            class="nav-link-text">Carousel</span>
                      </div>
                    </router-link>
                    <div class="parent-wrapper">
                      <ul class="nav collapse parent" data-bs-parent="#components" id="nv-carousel">
                        <li class="nav-item">
                          <router-link class="nav-link" to="../modules/components/carousel/bootstrap">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Bootstrap</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../modules/components/carousel/swiper">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Swiper</span></div>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/collapse">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Collapse</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/dropdown">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Dropdown</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/list-group">
                      <div class="d-flex align-items-center"><span class="nav-link-text">List group</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/modal">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Modals</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link dropdown-indicator" to="#nv-navs-_and_-Tabs"
                                 data-bs-toggle="collapse" aria-expanded="false"
                                 aria-controls="nv-navs-_and_-Tabs">
                      <div class="d-flex align-items-center">
                        <div class="dropdown-indicator-icon-wrapper"><span
                            class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                        <span
                            class="nav-link-text">Navs &amp; Tabs</span>
                      </div>
                    </router-link>
                    <div class="parent-wrapper">
                      <ul class="nav collapse parent" data-bs-parent="#components" id="nv-navs-_and_-Tabs">
                        <li class="nav-item">
                          <router-link class="nav-link" to="../modules/components/navs-and-tabs/navs">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Navs</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link"
                                       to="../modules/components/navs-and-tabs/navbar">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Navbar</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../modules/components/navs-and-tabs/tabs">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Tabs</span></div>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/offcanvas">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Offcanvas</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/progress-bar">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Progress bar</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/placeholder">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Placeholder</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/pagination">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Pagination</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/popovers">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Popovers</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/scrollspy">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Scrollspy</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/sortable">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Sortable</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/spinners">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Spinners</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/toast">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Toast</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/tooltips">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Tooltips</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/typed-text">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Typed text</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/components/chat-widget">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Chat widget</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-utilities"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-utilities">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="tool"></span></span><span
                    class="nav-link-text">Utilities</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-utilities">
                  <li class="collapsed-nav-item-title d-none">Utilities</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/utilities/background">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Background</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/utilities/borders">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Borders</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/utilities/colors">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Colors</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/utilities/display">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Display</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/utilities/flex">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Flex</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/utilities/stacks">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Stacks</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/utilities/float">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Float</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/utilities/grid">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Grid</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/utilities/interactions">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Interactions</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/utilities/opacity">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Opacity</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/utilities/overflow">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Overflow</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/utilities/position">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Position</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/utilities/shadows">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Shadows</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/utilities/sizing">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Sizing</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/utilities/spacing">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Spacing</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/utilities/typography">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Typography</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/utilities/vertical-align">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Vertical align</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../modules/utilities/visibility">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Visibility</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link label-1" to="../widgets" role="button"
                           data-bs-toggle="" aria-expanded="false">
                <div class="d-flex align-items-center"><span class="nav-link-icon"><span
                    data-feather="server"></span></span><span class="nav-link-text-wrapper"><span
                    class="nav-link-text">Widgets</span></span></div>
              </router-link>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-multi-level"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-multi-level">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="layers"></span></span><span class="nav-link-text">Multi
                      level</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-multi-level">
                  <li class="collapsed-nav-item-title d-none">Multi level</li>
                  <li class="nav-item">
                    <router-link class="nav-link dropdown-indicator" to="#nv-level-two"
                                 data-bs-toggle="collapse" aria-expanded="false"
                                 aria-controls="nv-level-two">
                      <div class="d-flex align-items-center">
                        <div class="dropdown-indicator-icon-wrapper"><span
                            class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                        <span
                            class="nav-link-text">Level two</span>
                      </div>
                    </router-link>
                    <div class="parent-wrapper">
                      <ul class="nav collapse parent" data-bs-parent="#multi-level" id="nv-level-two">
                        <li class="nav-item">
                          <router-link class="nav-link" to="../index-2#!">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Item 1</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="../index-2#!">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Item 2</span></div>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link dropdown-indicator" to="#nv-level-three"
                                 data-bs-toggle="collapse" aria-expanded="false"
                                 aria-controls="nv-level-three">
                      <div class="d-flex align-items-center">
                        <div class="dropdown-indicator-icon-wrapper"><span
                            class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                        <span
                            class="nav-link-text">Level three</span>
                      </div>
                    </router-link>
                    <div class="parent-wrapper">
                      <ul class="nav collapse parent" data-bs-parent="#multi-level" id="nv-level-three">
                        <li class="nav-item">
                          <router-link class="nav-link" to="../index-2#!">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Item 3</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link dropdown-indicator" to="#nv-item-4"
                                       data-bs-toggle="collapse" aria-expanded="false"
                                       aria-controls="nv-item-4">
                            <div class="d-flex align-items-center">
                              <div class="dropdown-indicator-icon-wrapper"><span
                                  class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                              <span
                                  class="nav-link-text">Item 4</span>
                            </div>
                          </router-link>
                          <div class="parent-wrapper">
                            <ul class="nav collapse parent" data-bs-parent="#level-three" id="nv-item-4">
                              <li class="nav-item">
                                <router-link class="nav-link" to="../index-2#!">
                                  <div class="d-flex align-items-center"><span class="nav-link-text">Item 5</span>
                                  </div>
                                </router-link>
                              </li>
                              <li class="nav-item">
                                <router-link class="nav-link" to="../index-2#!">
                                  <div class="d-flex align-items-center"><span class="nav-link-text">Item 6</span>
                                  </div>
                                </router-link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link dropdown-indicator" to="#nv-level-four"
                                 data-bs-toggle="collapse" aria-expanded="false"
                                 aria-controls="nv-level-four">
                      <div class="d-flex align-items-center">
                        <div class="dropdown-indicator-icon-wrapper"><span
                            class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                        <span
                            class="nav-link-text">Level four</span>
                      </div>
                    </router-link>
                    <div class="parent-wrapper">
                      <ul class="nav collapse parent" data-bs-parent="#multi-level" id="nv-level-four">
                        <li class="nav-item">
                          <router-link class="nav-link" to="../index-2#!">
                            <div class="d-flex align-items-center"><span class="nav-link-text">Item 6</span></div>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link dropdown-indicator" to="#nv-item-7"
                                       data-bs-toggle="collapse" aria-expanded="false"
                                       aria-controls="nv-item-7">
                            <div class="d-flex align-items-center">
                              <div class="dropdown-indicator-icon-wrapper"><span
                                  class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                              <span
                                  class="nav-link-text">Item 7</span>
                            </div>
                          </router-link>
                          <div class="parent-wrapper">
                            <ul class="nav collapse parent" data-bs-parent="#level-four" id="nv-item-7">
                              <li class="nav-item">
                                <router-link class="nav-link" to="../index-2#!">
                                  <div class="d-flex align-items-center"><span class="nav-link-text">Item 8</span>
                                  </div>
                                </router-link>
                              </li>
                              <li class="nav-item">
                                <router-link class="nav-link dropdown-indicator" to="#nv-item-9"
                                             data-bs-toggle="collapse" aria-expanded="false"
                                             aria-controls="nv-item-9">
                                  <div class="d-flex align-items-center">
                                    <div class="dropdown-indicator-icon-wrapper"><span
                                        class="fa fa-caret-right dropdown-indicator-icon"></span></div>
                                    <span
                                        class="nav-link-text">Item 9</span>
                                  </div>
                                </router-link>
                                <div class="parent-wrapper">
                                  <ul class="nav collapse parent" data-bs-parent="#item-7" id="nv-item-9">
                                    <li class="nav-item">
                                      <router-link class="nav-link" to="../index-2#!">
                                        <div class="d-flex align-items-center"><span class="nav-link-text">Item
                                              10</span></div>
                                      </router-link>
                                    </li>
                                    <li class="nav-item">
                                      <router-link class="nav-link" to="../index-2#!">
                                        <div class="d-flex align-items-center"><span class="nav-link-text">Item
                                              11</span></div>
                                      </router-link>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <!-- label-->
            <p class="navbar-vertical-label">Documentation</p>
            <hr class="navbar-vertical-line"/>
            <div class="nav-item-wrapper">
              <router-link class="nav-link label-1" to="../documentation/getting-started"
                           role="button" data-bs-toggle="" aria-expanded="false">
                <div class="d-flex align-items-center"><span class="nav-link-icon"><span
                    data-feather="life-buoy"></span></span><span class="nav-link-text-wrapper"><span
                    class="nav-link-text">Getting started</span></span></div>
              </router-link>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-customization"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-customization">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="settings"></span></span><span
                    class="nav-link-text">Customization</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-customization">
                  <li class="collapsed-nav-item-title d-none">Customization</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../documentation/customization/configuration">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Configuration</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../documentation/customization/styling">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Styling</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../documentation/customization/color">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Color</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../documentation/customization/dark-mode">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Dark mode</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../documentation/customization/plugin">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Plugin</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link dropdown-indicator label-1" to="#nv-layouts-doc"
                           role="button" data-bs-toggle="collapse" aria-expanded="false"
                           aria-controls="nv-layouts-doc">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper"><i
                      class="fa fa-caret-right dropdown-indicator-icon"></i></div>
                  <span
                      class="nav-link-icon"><span data-feather="table"></span></span><span class="nav-link-text">Layouts
                      doc</span>
                </div>
              </router-link>
              <div class="parent-wrapper label-1">
                <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-layouts-doc">
                  <li class="collapsed-nav-item-title d-none">Layouts doc</li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../documentation/layouts/vertical-navbar">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Vertical navbar</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../documentation/layouts/horizontal-navbar">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Horizontal navbar</span>
                      </div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../documentation/layouts/combo-navbar">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Combo navbar</span></div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="../documentation/layouts/dual-nav">
                      <div class="d-flex align-items-center"><span class="nav-link-text">Dual nav</span></div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link label-1" to="../documentation/gulp" role="button"
                           data-bs-toggle="" aria-expanded="false">
                <div class="d-flex align-items-center"><span class="nav-link-icon"><span
                    class="fa-brands fa-gulp ms-1 me-1 fa-lg"></span></span><span
                    class="nav-link-text-wrapper"><span class="nav-link-text">Gulp</span></span></div>
              </router-link>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link label-1" to="../documentation/design-file"
                           role="button" data-bs-toggle="" aria-expanded="false">
                <div class="d-flex align-items-center"><span class="nav-link-icon"><span
                    data-feather="figma"></span></span><span class="nav-link-text-wrapper"><span
                    class="nav-link-text">Design file</span></span></div>
              </router-link>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link label-1" to="../changelog" role="button"
                           data-bs-toggle="" aria-expanded="false">
                <div class="d-flex align-items-center"><span class="nav-link-icon"><span
                    data-feather="git-merge"></span></span><span class="nav-link-text-wrapper"><span
                    class="nav-link-text">Changelog</span></span></div>
              </router-link>
            </div>
            <div class="nav-item-wrapper">
              <router-link class="nav-link label-1" to="../showcase" role="button"
                           data-bs-toggle="" aria-expanded="false">
                <div class="d-flex align-items-center"><span class="nav-link-icon"><span
                    data-feather="monitor"></span></span><span class="nav-link-text-wrapper"><span
                    class="nav-link-text">Showcase</span></span></div>
              </router-link>
            </div>
          </li>

        </ul>
      </div>
    </div>
    <div class="navbar-vertical-footer">
      <button
          class="btn navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center"><span
          class="uil uil-left-arrow-to-left fs-8"></span><span class="uil uil-arrow-from-right fs-8"></span><span
          class="navbar-vertical-footer-text ms-2">Collapsed View</span></button>
    </div>
  </nav>
</template>

<script setup>
import {ref} from "vue";
import DropdownMenu from "@/components/base/DropdownMenu.vue";
import {useRouterStore} from "@/stores/router-store.js";

const routerStore = useRouterStore();

const homeLinks = ref([
  {name: 'E commerce', link: 'dashboard/e-commerce'},
  {name: 'Project management', link: 'dashboard/project-management'},
  {name: 'Travel agency', link: 'dashboard/travel-agency'},
  {name: 'Social feed', link: 'dashboard/social-feed'},
]);
const eCommerceLinks = ref([
    {name: 'Admin', link: ''},
]);

</script>

<style scoped>

</style>