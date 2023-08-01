export const Routes = {
  dashboard: "/",
  login: "/login",
  logout: "/logout",
  register: "/register",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  profile: "/profile",
  settings: "/settings",
  tag: {
    ...routesFactory("/tags"),
  },
  reviews: {
    ...routesFactory("/reviews"),
  },
  category: {
    ...routesFactory("/categories"),
  },
  sub_category: {
    ...routesFactory("/sub-categories"),
  },
  attribute: {
    ...routesFactory("/attributes"),
  },
  user: {
    ...routesFactory("/users"),
  },
  coupon: {
    ...routesFactory("/coupons"),
  },
  order: {
    ...routesFactory("/orders"),
  },
  orderStatus: {
    ...routesFactory("/order-status"),
  },
  products: {
    ...routesFactory("/products"),
  },
  tax: {
    ...routesFactory("/taxes"),
  },
  shipping: {
    ...routesFactory("/shippings"),
  },
  withdraw: {
    ...routesFactory("/withdraws"),
  },
  staff: {
    ...routesFactory("/staffs"),
  },
  refund: {
    ...routesFactory("/refunds"),
  },
  question: {
    ...routesFactory("/questions"),
  },
  message: {
    ...routesFactory("/message"),
  },
  storeNotice: {
    ...routesFactory("/store-notices"),
  },
}

function routesFactory(endpoint: string) {
  return {
    list: `${endpoint}`,
    create: `${endpoint}/create`,
    edit: (slug: string) => `${endpoint}/${slug}/edit`,
    details: (slug: string) => `${endpoint}/${slug}`,
  }
}