import { useState } from "react"

import { Routes } from "@/config/routes"
import ActionButtons from "../common/action-buttons"
import { MODAL_VIEW } from "@/utils/enums"
import useModal from "@/hooks/useModal"
import { Table } from "../ui/table/table"
import { AttributeResult, CategoryResult } from "@/utils/types"
import Image from "next/image"

export type IProps = {
  categories: CategoryResult[] | undefined
}
const CategoriesList = ({ categories }: IProps) => {
  const { handleOpenModal } = useModal()

  let columns = [
    {
      title: "Name",

      dataIndex: "name",
      key: "name",
      align: "left",
      render: (name: any) => <span className="whitespace-nowrap">{name}</span>,
    },
    // {
    //   title: "Image",
    //   dataIndex: "image",
    //   key: "values",
    //   align: "left",
    //   width: 74,
    //   render: (image: any, { name }: { name: string }) => (
    //     <div className="relative flex h-[42px] w-[42px] items-center">
    //       <Image
    //         // src={image?.thumbnail ?? siteSettings.product.placeholder}
    //         src={image}
    //         alt={name}
    //         fill
    //         sizes="(max-width: 768px) 100vw"
    //         className="overflow-hidden rounded object-fill"
    //       />
    //     </div>
    //   ),
    // },
    {
      title: "Actions",
      dataIndex: "id",
      key: "actions",
      align: "right",
      render: (id: string) => (
        <ActionButtons
          onDelete={() =>
            handleOpenModal({
              view: MODAL_VIEW.DELETE_PRODUCT,
              modalPayload: id,
            })
          }
          href={Routes.category.edit(id)}
        />
      ),
    },
  ]

  return (
    <div className="mb-8 overflow-hidden rounded shadow">
      <Table
        // @ts-ignore
        columns={columns}
        emptyText={""}
        data={categories}
        rowKey="id"
        scroll={{ x: 380 }}
      />
    </div>
  )
}

export default CategoriesList