import { OrderResult, OrderStatus } from "@/utils/types"
import React from "react"
import Badge from "../ui/badge/badge"
import StatusColor from "./status-color"
import { Table } from "../ui/table/table"
import { differenceInDays, parseISO } from "date-fns"
import { getPrice } from "@/utils/helpers"

type Props = {
  orders: OrderResult[]
  title: string
}

const RecentOrders = ({ title, orders }: Props) => {
  const columns = [
    {
      title: "Tracking Number",
      dataIndex: "id",
      key: "id",
      align: "center",
      width: 150,
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
      align: "center",
      width: 150,
      render: function Render(value: number, record: OrderResult) {
        const price = getPrice(record.totalAmount)

        return (
          <span className="whitespace-nowrap" title={price}>
            {price}
          </span>
        )
      },
    },
    {
      title: "Order Date",
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",
      width: 150,
      render: (createdAt: any) => {
        const date = parseISO(createdAt)
        const daysAgo = differenceInDays(new Date(), date)
        return (
          <span className="whitespace-nowrap">{`${daysAgo} days ago`}</span>
        )
      },
    },
    {
      title: "Order Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      width: 150,
      render: (status: OrderStatus) => (
        <Badge text={status.replace(/-/g, " ")} color={StatusColor(status)} />
      ),
    },
  ]
  return (
    <div className="bg-white overflow-hidden rounded shadow">
      <h3 className="border-b border-border-200 bg-light px-4 py-3 text-center font-semibold text-heading">
        {title}
      </h3>
      <Table //@ts-ignore
        columns={columns}
        emptyText={""}
        data={orders}
        rowKey="id"
        scroll={{ x: 200 }}
      />
    </div>
  )
}

export default RecentOrders
