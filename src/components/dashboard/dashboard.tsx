import { useGetAnalyticsQuery } from "@/redux/services/analytics"
import React from "react"
import Loader from "../ui/loader/loader"
import DashboardCard from "../ui/cards/dashboard-card"
import BarChart from "../ui/chart/bar-chart"
import { useGetOrdersQuery } from "@/redux/services/orders"
import RecentOrders from "../order/recent-orders"
import PopularProducts from "../products/popular-products"
import { useGetProductsQuery } from "@/redux/services/products"
import ErrorMessage from "../ui/error-message"

type Props = {}

const Dashboard = (props: Props) => {
  const {
    data: analytics,
    isLoading: isLoadingAnalytics,
    isError: isAnalyticsError,
    error: analyticsError,
  } = useGetAnalyticsQuery()
  const {
    data: orders,
    isLoading: isLoadingOrders,
    isError: isOrderError,
    error: orderError,
  } = useGetOrdersQuery({ limit: 10 })
  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isProductsError,
    error: productError,
  } = useGetProductsQuery({ limit: 10 })

  if (isLoadingAnalytics || isLoadingOrders || isLoadingProducts)
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Loader />
      </div>
    )

  if (isAnalyticsError || isOrderError || isProductsError) {
    const errorMessage: any = isAnalyticsError
      ? analyticsError
      : isOrderError
      ? orderError
      : isProductsError
      ? productError
      : null

    return <ErrorMessage message={errorMessage?.data?.error} />
  }
  let salesByYear: number[] = Array.from({ length: 12 }, (_) => 0)
  if (!!analytics?.data?.totalYearSaleByMonth?.length) {
    salesByYear = analytics?.data.totalYearSaleByMonth.map((item: any) =>
      item.total.toFixed(2)
    )
  }
  return (
    <>
      <div className="mb-6 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <div className="w-full">
          <DashboardCard
            title="Total Revenue"
            subtitle="Last 30 days"
            result={analytics?.data.todaysRevenue}
          />
        </div>
        <div className="w-full">
          <DashboardCard
            title="Total Order"
            subtitle="Last 30 days"
            result={analytics?.data.totalOrders}
          />
        </div>
        <div className="w-full">
          <DashboardCard
            title="Today's Revenue"
            result={analytics?.data.todaysRevenue}
          />
        </div>
        <div className="w-full">
          <DashboardCard
            title="Today's Orders"
            result={analytics?.data.todaysRevenue}
          />
        </div>
      </div>

      <div className="mb-6 flex w-full flex-wrap md:flex-nowrap ">
        <BarChart
          title="Sale History"
          colors={["#ce2044"]}
          series={salesByYear}
          categories={[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ]}
        />
      </div>

      <div className="mb-6">
        <RecentOrders title="Recent Orders" orders={orders?.data!} />
      </div>

      <div className="mb-6">
        <PopularProducts title="Popular Products" products={products?.data!} />
      </div>
    </>
  )
}

export default Dashboard
