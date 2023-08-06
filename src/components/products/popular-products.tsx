import { CategoryResult, ProductResult } from "@/utils/types"
import React from "react"
import { Table } from "../ui/table/table"

type Props = {
  title: string
  products: ProductResult[]
}

const PopularProducts = ({ title, products }: Props) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      width: 200,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      align: "center",
      width: 150,
      render: (category: CategoryResult) => (
        <span className="whitespace-nowrap">{category?.name}</span>
      ),
    },
    {
      title: "Sub Category",
      dataIndex: "sub_category",
      key: "category",
      align: "center",
      width: 150,
      render: (category: CategoryResult) => (
        <span className="whitespace-nowrap">{category?.name}</span>
      ),
    },
    {
      title: "Price/Unit",
      dataIndex: "price",
      key: "price",
      align: "center",
      width: 150,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      align: "center",
      width: 100,
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
        data={products}
        rowKey="id"
        scroll={{ x: 200 }}
      />
    </div>
  )
}

export default PopularProducts