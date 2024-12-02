<template>
  <div class="topbar">
    <nav class="navbar-custom">
      <ul class="list-unstyled topbar-nav float-end mb-0">
        <li class="dropdown">
          <a class="nav-link dropdown-toggle arrow-none nav-icon" href="#">
            <img src="@/assets/images/sun.png" alt="" class="thumb-xxs rounded-circle">
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#"><img src="@/assets/images/sun.png" alt=""
                                                   class="me-2">English</a>
            <a class="dropdown-item" href="#"><img src="@/assets/images/sun.png" alt=""
                                                   class="me-2">Spanish</a>
            <a class="dropdown-item" href="#"><img src="@/assets/images/sun.png" alt=""
                                                   class="me-2">German</a>
            <a class="dropdown-item" href="#"><img src="@/assets/images/sun.png" alt=""
                                                   class="me-2">French</a>
          </div>
        </li>

        <li class="dropdown notification-list">
          <a class="nav-link dropdown-toggle arrow-none nav-icon" href="#">
            <i class="mdi mdi-email"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-end dropdown-lg pt-0">

            <h6 class="dropdown-item-text font-15 m-0 py-3 border-bottom d-flex justify-content-between align-items-center">
              Emails <span class="badge bg-soft-primary badge-pill">3</span>
            </h6>
            <div class="notification-menu">

              <a href="#" class="dropdown-item py-3">
                <small class="float-end text-muted ps-2">2 min ago</small>
                <div class="media">
                  <div class="avatar-md bg-soft-primary">
                    <img src="@/assets/images/sun.png" alt="" class="thumb-sm rounded-circle">
                  </div>
                  <div class="media-body align-self-center ms-2 text-truncate">
                    <h6 class="my-0 fw-normal text-dark">Your order is placed</h6>
                    <small class="text-muted mb-0">Dummy text of the printing and industry.</small>
                  </div>
                </div>
              </a>

              <a href="#" class="dropdown-item py-3">
                <small class="float-end text-muted ps-2">10 min ago</small>
                <div class="media">
                  <div class="avatar-md bg-soft-primary">
                    <img src="@/assets/images/sun.png" alt="" class="thumb-sm rounded-circle">
                  </div>
                  <div class="media-body align-self-center ms-2 text-truncate">
                    <h6 class="my-0 fw-normal text-dark">Meeting with designers</h6>
                    <small class="text-muted mb-0">It is a long established fact that a reader.</small>
                  </div>
                </div>
              </a>

              <a href="#" class="dropdown-item py-3">
                <small class="float-end text-muted ps-2">40 min ago</small>
                <div class="media">
                  <div class="avatar-md bg-soft-primary">
                    <img src="@/assets/images/sun.png" alt="" class="thumb-sm rounded-circle">
                  </div>
                  <div class="media-body align-self-center ms-2 text-truncate">
                    <h6 class="my-0 fw-normal text-dark">UX 3 Task complete.</h6>
                    <small class="text-muted mb-0">Dummy text of the printing.</small>
                  </div>
                </div>
              </a>

              <a href="#" class="dropdown-item py-3">
                <small class="float-end text-muted ps-2">1 hr ago</small>
                <div class="media">
                  <div class="avatar-md bg-soft-primary">
                    <img src="@/assets/images/sun.png" alt="" class="thumb-sm rounded-circle">
                  </div>
                  <div class="media-body align-self-center ms-2 text-truncate">
                    <h6 class="my-0 fw-normal text-dark">Your order is placed</h6>
                    <small class="text-muted mb-0">It is a long established fact that a reader.</small>
                  </div>
                </div>
              </a>

              <a href="#" class="dropdown-item py-3">
                <small class="float-end text-muted ps-2">2 hrs ago</small>
                <div class="media">
                  <div class="avatar-md bg-soft-primary">
                    <img src="@/assets/images/sun.png" alt="" class="thumb-sm rounded-circle">
                  </div>
                  <div class="media-body align-self-center ms-2 text-truncate">
                    <h6 class="my-0 fw-normal text-dark">Payment Successfull</h6>
                    <small class="text-muted mb-0">Dummy text of the printing.</small>
                  </div>
                </div>
              </a>
            </div>

            <a href="" class="dropdown-item text-center text-primary">
              View all <i class="fi-arrow-right"></i>
            </a>
          </div>
        </li>

        <li class="dropdown notification-list">
          <a class="nav-link dropdown-toggle arrow-none nav-icon" href="#" role="button">
            <i class="mdi mdi-bell"></i>
            <span class="alert-badge"></span>
          </a>
          <div class="dropdown-menu dropdown-menu-end dropdown-lg pt-0">

            <h6 class="dropdown-item-text font-15 m-0 py-3 border-bottom d-flex justify-content-between align-items-center">
              Notifications <span class="badge bg-soft-primary badge-pill">2</span>
            </h6>
            <div class="notification-menu">
              <a href="#" class="dropdown-item py-3">
                <small class="float-end text-muted ps-2">2 min ago</small>
                <div class="media">
                  <div class="avatar-md bg-soft-primary">
                    <i class="mdi mdi-chart-arcs"></i>
                  </div>
                  <div class="media-body align-self-center ms-2 text-truncate">
                    <h6 class="my-0 fw-normal text-dark">Your order is placed</h6>
                    <small class="text-muted mb-0">Dummy text of the printing and industry.</small>
                  </div>
                </div>
              </a>

              <a href="#" class="dropdown-item py-3">
                <small class="float-end text-muted ps-2">10 min ago</small>
                <div class="media">
                  <div class="avatar-md bg-soft-primary">
                    <i class="mdi mdi-device-computer-camera"></i>
                  </div>
                  <div class="media-body align-self-center ms-2 text-truncate">
                    <h6 class="my-0 fw-normal text-dark">Meeting with designers</h6>
                    <small class="text-muted mb-0">It is a long established fact that a reader.</small>
                  </div>
                </div>
              </a>

              <a href="#" class="dropdown-item py-3">
                <small class="float-end text-muted ps-2">40 min ago</small>
                <div class="media">
                  <div class="avatar-md bg-soft-primary">
                    <i class="mdi mdi-diamond"></i>
                  </div>
                  <div class="media-body align-self-center ms-2 text-truncate">
                    <h6 class="my-0 fw-normal text-dark">UX 3 Task complete.</h6>
                    <small class="text-muted mb-0">Dummy text of the printing.</small>
                  </div>
                </div>
              </a>

              <a href="#" class="dropdown-item py-3">
                <small class="float-end text-muted ps-2">1 hr ago</small>
                <div class="media">
                  <div class="avatar-md bg-soft-primary">
                    <i class="mdi mdi-drone"></i>
                  </div>
                  <div class="media-body align-self-center ms-2 text-truncate">
                    <h6 class="my-0 fw-normal text-dark">Your order is placed</h6>
                    <small class="text-muted mb-0">It is a long established fact that a reader.</small>
                  </div>
                </div>
              </a>

              <a href="#" class="dropdown-item py-3">
                <small class="float-end text-muted ps-2">2 hrs ago</small>
                <div class="media">
                  <div class="avatar-md bg-soft-primary">
                    <i class="mdi mdi-users"></i>
                  </div>
                  <div class="media-body align-self-center ms-2 text-truncate">
                    <h6 class="my-0 fw-normal text-dark">Payment Successfull</h6>
                    <small class="text-muted mb-0">Dummy text of the printing.</small>
                  </div>
                </div>
              </a>
            </div>

            <a href="" class="dropdown-item text-center text-primary">
              View all <i class="mdi mdi-arrow-right"></i>
            </a>
          </div>
        </li>

        <li class="dropdown">
          <a class="nav-link dropdown-toggle nav-user" href="#">
            <div class="d-flex align-items-center">
              <img src="@/assets/images/sun.png" alt="profile-user"
                   class="rounded-circle me-2 thumb-sm"/>
              <div>
                <small class="d-none d-md-block font-11">Admin</small>
                <span class="d-none d-md-block fw-semibold font-12">Maria Gibson <i
                    class="mdi mdi-chevron-down"></i></span>
              </div>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="#"><i class="mdi mdi-user font-16 me-1 align-text-bottom"></i> Profile</a>
            <a class="dropdown-item" href="#"><i class="mdi mdi-settings font-16 me-1 align-text-bottom"></i>
              Settings</a>
            <div class="dropdown-divider mb-0"></div>
            <a class="dropdown-item" href="#"><i class="mdi mdi-power font-16 me-1 align-text-bottom"></i> Logout</a>
          </div>
        </li>
        <li class="notification-list">
          <a class="nav-link arrow-none nav-icon offcanvas-btn" href="#">
            <i class="mdi mdi-settings mdi-spin"></i>
          </a>
        </li>
      </ul>

      <ul class="list-unstyled topbar-nav mb-0">
        <li>
          <button class="nav-link button-menu-mobile nav-icon">
            <i class="mdi mdi-menu"></i>
          </button>
        </li>
        <li class="hide-phone app-search">
          <form role="search" action="#">
            <input type="search" name="search" class="form-control top-search mb-0" placeholder="Search something...">
            <button type="submit"><i class="mdi mdi-search"></i></button>
          </form>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>